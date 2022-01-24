import { BigNumber, BigNumberish, Contract, ethers, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import { contractAddresses } from './utils';
import { zapAuctionAbi, zapMediaAbi } from './contract/abi';
import ZapMedia from './zapMedia';
import invariant from 'tiny-invariant';

export interface Auction {
  token: {
    tokenId: BigNumberish;
    mediaContract: string;
  };
  approved: boolean;
  amount: BigNumber;
  duration: BigNumber;
  firstBidTime: BigNumber;
  reservePrice: BigNumber;
  curatorFeePercentage: number;
  tokenOwner: string;
  bidder: string;
  curator: string;
  auctionCurrency: string;
}

class AuctionHouse {
  public readonly auctionHouse: Contract;
  public readonly chainId: number;
  public readonly signer: Signer;
  media: ZapMedia;

  constructor(chainId: number, signer: Signer) {
    this.chainId = chainId;
    this.signer = signer;

    this.auctionHouse = new ethers.Contract(
      contractAddresses(chainId).zapAuctionAddress,
      zapAuctionAbi,
      signer,
    );

    this.media = new ZapMedia(chainId, signer);
  }

  public async fetchAuction(auctionId: BigNumberish): Promise<any> {
    const auctionInfo = await this.auctionHouse.auctions(auctionId);
    if (auctionInfo.token.mediaContract == ethers.constants.AddressZero) {
      invariant(false, 'AuctionHouse (fetchAuction): AuctionId does not exist.');
    } else {
      return auctionInfo;
    }
  }

  public async createAuction(
    tokenId: BigNumberish,
    tokenAddress: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentages: number,
    auctionCurrency: string,
  ) {
    // Checks if the tokenId exists if not throw an error
    try {
      await this.media.fetchOwnerOf(tokenId);
    } catch {
      invariant(false, 'AuctionHouse (createAuction): TokenId does not exist.');
    }

    // Fetches the address who owns the tokenId
    const owner = await this.media.fetchOwnerOf(tokenId);

    // Fetches the address approved to the tokenId
    const approved = await this.media.fetchApproved(tokenId);

    // Fetches the address of the caller
    const signerAddress = await this.signer.getAddress();

    // If the curator fee is not less than 100 thrown an error
    if (curatorFeePercentages == 100) {
      invariant(false, 'AuctionHouse (createAuction): CuratorFeePercentage must be less than 100.');
    }
    // If the caller is the tokenId owner and the auctionHouse address is not approved throw an error
    else if (signerAddress == owner && this.auctionHouse.address !== approved) {
      invariant(false, 'AuctionHouse (createAuction): Transfer caller is not owner nor approved.');
    }
    // If the caller is not the tokenId owner and the auctionHouse is approved throw an error
    else if (signerAddress !== owner && this.auctionHouse.address == approved) {
      invariant(false, 'AuctionHouse (createAuction): Caller is not approved or token owner.');
    }
    // If the media adddress is a zero address throw an error
    else if (tokenAddress == ethers.constants.AddressZero) {
      invariant(false, 'AuctionHouse (createAuction): Media cannot be a zero address.');
    }
    // If the caller is the tokenId owner and the auctionHouse is approved invoke createAuction
    else {
      return this.auctionHouse.createAuction(
        tokenId,
        tokenAddress,
        duration,
        reservePrice,
        curator,
        curatorFeePercentages,
        auctionCurrency,
      );
    }
  }

  public async startAuction(auctionId: BigNumberish, approved: boolean) {
    // Fetches the auction details
    const auctionInfo = await this.fetchAuction(auctionId);

    // If the fetched firstBidTime is not 0 throw an error
    if (parseInt(auctionInfo.firstBidTime._hex) !== 0) {
      invariant(false, 'AuctionHouse (startAuction): Auction has already started.');

      // If the fetched curator address does not equal the caller address throw an error
    } else if (auctionInfo.curator !== (await this.signer.getAddress())) {
      invariant(false, 'AuctionHouse (startAuction): Only the curator can start this auction.');
    }

    // If the auctionId exists and the curator is the caller invoke startCreation
    return this.auctionHouse.startAuction(auctionId, approved);
  }

  public async endAuction(auctionId: BigNumberish) {
    // * Only end auction if 1) at least one bid exists, 2) it is still listed auction and 3) firstBidTime to set duration is equal or greater than firstBidTime to Date.now() and 4) signer is curator
    // 1  check if auctionid exists (#2)
    // 2  check if firstBidTime !== 0  (only end when timer is set at 0; #1, #3)
    // 4 check if signer is curator of the auction (#4)
    // =============
    // Checks if the auctionId exists if not throw an error
    try {
      const auctionInfo = await this.fetchAuction(auctionId);
    } catch {
      invariant(false, 'AuctionHouse (endAuction): AuctionId does not exist.');
    }

    const auctionInfo = await this.fetchAuction(auctionId);

      if (!auctionInfo) {
        invariant(false, 'AuctionHouse (endAuction): AuctionId does not exist.');
      } else {
        if (auctionInfo.firstBidTime) {
          console.log(parseInt(auctionInfo.firstBidTime._hex));
        }
        // Check if at least one bidder exists, else throw an error
        if (auctionInfo.bidder !== ethers.constants.AddressZero) {
          console.log(auctionInfo)
          invariant(false, 'AuctionHouse (endAuction): Auction has already started.');
        } 
        // Check if first bid time is equal or greater than current time, else throw an error
        else if (parseInt(auctionInfo.firstBidTime._hex) !== 0) {
          invariant(false, 'AuctionHouse (endAuction): Auction has already started.');
        }
        // Check if the signer is the curator, if not throw an error
        else if (auctionInfo.curator !== (await this.signer.getAddress())) {
          invariant(false, 'AuctionHouse (endAuction): Only the curator can end this auction.');
        }
        return this.auctionHouse.endAuction(auctionId);
      }

  // else if (Date.parse(Date.now().toString()) - parseInt(auctionInfo.firstBidTime._hex) < parseInt(auctionInfo.duration._hex)) {
  //   invariant(false, 'AuctionHouse (endAuction): Auction has not ended yet.');
  // } ;
  
  }

  public async cancelAuction(auctionId: BigNumberish) {
    const auctionInfo = await this.fetchAuction(auctionId);

    // If the auctionId does not exist throw an error
    if (auctionInfo.token.mediaContract === ethers.constants.AddressZero) {
      invariant(false, 'AuctionHouse (cancelAuction): Auction does not exist.');
    }
    // If the auction firstBidTime is not 0 throw an error
    else if (parseInt(auctionInfo.firstBidTime._hex) !== 0) {
      invariant(false, 'AuctionHouse (cancelAuction): Auction has already started.');
    }
    // If the fetched curator address does not equal the caller address throw an error
    else if (auctionInfo.curator !== (await this.signer.getAddress())) {
      invariant(false, 'AuctionHouse (cancelAuction): Only the curator can cancel this auction.');
    }
    return this.auctionHouse.cancelAuction(auctionId);
  }

  public async setAuctionReservePrice(auctionId: BigNumberish, reservePrice: BigNumberish) {
    // Fetches the auction details
    const auctionInfo = await this.fetchAuction(auctionId);

    // If the caller does not equal the curator address and does not equal the token owner address throw an error
    if (
      (await this.signer.getAddress()) !== auctionInfo.curator &&
      (await this.signer.getAddress()) !== auctionInfo.tokenOwner
    ) {
      invariant(
        false,
        'AuctionHouse (setAuctionReservePrice): Caller must be the curator or token owner',
      );
      // If the fetched firstBidTime is not 0 throw an error
    } else if (parseInt(auctionInfo.firstBidTime._hex) !== 0) {
      invariant(false, 'AuctionHouse (setAuctionReservePrice): Auction has already started.');
    } else {
      return this.auctionHouse.setAuctionReservePrice(auctionId, reservePrice);
    }
  }
}

// function _handleZoraAuctionSettlement(uint256 auctionId) internal returns (bool, uint256) {
//   address currency = auctions[auctionId].auctionCurrency == ethers.constants.AddressZero ? wethAddress : auctions[auctionId].auctionCurrency;

//   IMarket.Bid memory bid = IMarket.Bid({
//       amount: auctions[auctionId].amount,
//       currency: currency,
//       bidder: address(this),
//       recipient: auctions[auctionId].bidder,
//       sellOnShare: Decimal.D256(0)
//   });

//   IERC20(currency).approve(IMediaExtended(zora).marketContract(), bid.amount);
//   IMedia(zora).setBid(auctions[auctionId].tokenId, bid);
//   uint256 beforeBalance = IERC20(currency).balanceOf(address(this));
//   try IMedia(zora).acceptBid(auctions[auctionId].tokenId, bid) {} catch {
//       // If the underlying NFT transfer here fails, we should cancel the auction and refund the winner
//       IMediaExtended(zora).removeBid(auctions[auctionId].tokenId);
//       return (false, 0);
//   }
//   uint256 afterBalance = IERC20(currency).balanceOf(address(this));

//   // We have to calculate the amount to send to the token owner here in case there was a
//   // sell-on share on the token
//   return (true, afterBalance.sub(beforeBalance));
// }


export default AuctionHouse;
