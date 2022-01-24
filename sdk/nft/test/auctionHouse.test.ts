import { expect } from 'chai';

import { BigNumber, Contract, ethers, Signer } from 'ethers';

import { constructBidShares, constructMediaData } from '../src/utils';

import {
  zapMarketAddresses,
  mediaFactoryAddresses,
  zapMediaAddresses,
  zapAuctionAddresses,
} from '../src/contract/addresses';

import {
  deployZapToken,
  deployZapVault,
  deployZapMarket,
  deployZapMediaImpl,
  deployMediaFactory,
  deployZapMedia,
  deployAuctionHouse,
} from '../src/deploy';

import AuctionHouse, { Auction } from '../src/auctionHouse';
import ZapMedia from '../src/zapMedia';

import { getSigners } from './test_utils';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

describe('AuctionHouse', () => {
  let token: Contract;
  let zapVault: Contract;
  let zapMarket: Contract;
  let zapMediaImpl: Contract;
  let mediaFactory: Contract;
  let signer: Signer;
  let zapMedia: Contract;
  let auctionHouse: Contract;

  const signers = getSigners(provider);

  beforeEach(async () => {
    signer = signers[0];

    token = await deployZapToken();
    zapVault = await deployZapVault();
    zapMarket = await deployZapMarket();
    zapMediaImpl = await deployZapMediaImpl();
    mediaFactory = await deployMediaFactory();
    zapMedia = await deployZapMedia();
    auctionHouse = await deployAuctionHouse();

    zapMarketAddresses['1337'] = zapMarket.address;
    mediaFactoryAddresses['1337'] = mediaFactory.address;
    zapMediaAddresses['1337'] = zapMedia.address;
    zapAuctionAddresses['1337'] = auctionHouse.address;
  });

  describe('#constructor', () => {
    it('Should throw an error if the networkId is invalid', async () => {
      expect(() => {
        new AuctionHouse(300, signer);
      }).to.throw('Constructor: Network Id is not supported.');
    });
  });

  describe('Contract Functions', () => {
    describe('Write Functions', () => {
      let media: any;
      let mediaAddress: any;
      let mediaData: any;
      let bidShares: any;

      let tokenURI =
        'https://bafkreievpmtbofalpowrcbr5oaok33e6xivii62r6fxh6fontaglngme2m.ipfs.dweb.link/';
      let metadataURI =
        'https://bafkreihhu7xo7knc3vn42jj26gz3jkvh3uu3rwurkb4djsoo5ayqs2s25a.ipfs.dweb.link/';

      beforeEach(async () => {
        let metadataHex = ethers.utils.formatBytes32String('Test');
        let metadataHashRaw = ethers.utils.keccak256(metadataHex);
        let metadataHashBytes = ethers.utils.arrayify(metadataHashRaw);

        let contentHex = ethers.utils.formatBytes32String('Test Car');
        let contentHashRaw = ethers.utils.keccak256(contentHex);
        let contentHashBytes = ethers.utils.arrayify(contentHashRaw);

        let contentHash = contentHashBytes;
        let metadataHash = metadataHashBytes;

        media = new ZapMedia(1337, signer);
        mediaAddress = zapMediaAddresses['1337'];

        bidShares = constructBidShares(
          [
            await provider.getSigner(1).getAddress(),
            await provider.getSigner(2).getAddress(),
            await provider.getSigner(3).getAddress(),
          ],
          [15, 15, 15],
          15,
          35,
        );

        mediaData = constructMediaData(tokenURI, metadataURI, contentHash, metadataHash);

        await media.mint(mediaData, bidShares);
      });

      describe('#createAuction', () => {
        it('Should reject if the auctionHouse is not approved', async () => {
          const duration = 60 * 60 * 24;

          const reservePrice = BigNumber.from(10).pow(18).div(2);

          const auctionHouse = new AuctionHouse(1337, signer);

          await auctionHouse
            .createAuction(
              0,
              mediaAddress,
              duration,
              reservePrice,
              '0x0000000000000000000000000000000000000000',
              0,
              token.address,
            )
            .catch((err) => {
              expect(err.message).to.equal(
                'Invariant failed: AuctionHouse (createAuction): Transfer caller is not owner nor approved.',
              );
            });
        });

        it('Should reject if the caller is not approved', async () => {
          const duration = 60 * 60 * 24;

          const reservePrice = BigNumber.from(10).pow(18).div(2);

          const unapprovedSigner = signers[1];

          const auctionHouse = new AuctionHouse(1337, unapprovedSigner);

          await media.approve(auctionHouse.auctionHouse.address, 0);

          await auctionHouse
            .createAuction(
              0,
              mediaAddress,
              duration,
              reservePrice,
              '0x0000000000000000000000000000000000000000',
              0,
              token.address,
            )
            .catch((err) => {
              expect(err.message).to.equal(
                'Invariant failed: AuctionHouse (createAuction): Caller is not approved or token owner.',
              );
            });
        });

        it('Should reject if the curator fee is 100', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          const auctionHouse = new AuctionHouse(1337, signer);

          await media.approve(auctionHouse.auctionHouse.address, 0);

          await auctionHouse
            .createAuction(
              0,
              mediaAddress,
              duration,
              reservePrice,
              await signers[1].getAddress(),
              100,
              token.address,
            )
            .catch((err) => {
              expect(err.message).to.equal(
                'Invariant failed: AuctionHouse (createAuction): CuratorFeePercentage must be less than 100.',
              );
            });
        });

        it('Should reject if the tokenId does not exist', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          const auctionHouse = new AuctionHouse(1337, signer);

          await media.approve(auctionHouse.auctionHouse.address, 0);

          await auctionHouse
            .createAuction(
              300,
              mediaAddress,
              duration,
              reservePrice,
              '0x0000000000000000000000000000000000000000',
              0,
              token.address,
            )
            .catch((err) => {
              expect(err.message).to.equal(
                'Invariant failed: AuctionHouse (createAuction): TokenId does not exist.',
              );
            });
        });

        it('Should reject if the mediaContract is a zero address', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          const auctionHouse = new AuctionHouse(1337, signer);

          await media.approve(auctionHouse.auctionHouse.address, 0);

          await auctionHouse
            .createAuction(
              0,
              ethers.constants.AddressZero,
              duration,
              reservePrice,
              '0x0000000000000000000000000000000000000000',
              0,
              token.address,
            )
            .catch((err) => {
              expect(err.message).to.equal(
                'Invariant failed: AuctionHouse (createAuction): Media cannot be a zero address.',
              );
            });
        });

        it('Should create an auction', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          const auctionHouse = new AuctionHouse(1337, signer);

          await media.approve(auctionHouse.auctionHouse.address, 0);

          await auctionHouse.createAuction(
            0,
            mediaAddress,
            duration,
            reservePrice,
            '0x0000000000000000000000000000000000000000',
            0,
            token.address,
          );

          const createdAuction = await auctionHouse.fetchAuction(0);

          expect(parseInt(createdAuction.token.tokenId.toString())).to.equal(0);

          expect(createdAuction.token.mediaContract).to.equal(mediaAddress);
          expect(createdAuction.approved).to.be.true;
          expect(parseInt(createdAuction.duration._hex)).to.equal(60 * 60 * 24);
          expect(createdAuction.curatorFeePercentage).to.equal(0);
          expect(parseInt(createdAuction.reservePrice._hex)).to.equal(parseInt(reservePrice._hex));
          expect(createdAuction.tokenOwner).to.equal(await signer.getAddress());
          expect(createdAuction.curator).to.equal(ethers.constants.AddressZero);
          expect(createdAuction.auctionCurrency).to.equal(token.address);
        });
      });

      describe('#startAuction', () => {
        let auctionHouse: AuctionHouse;
        let curatorConnected: AuctionHouse;
        let curator: Signer;

        beforeEach(async () => {
          curator = signers[9];
          auctionHouse = new AuctionHouse(1337, signer);
          curatorConnected = new AuctionHouse(1337, curator);

          await media.approve(auctionHouse.auctionHouse.address, 0);
        });

        it('Should reject if the auctionId does not exist', async () => {
          await curatorConnected.startAuction(0, true).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (fetchAuction): AuctionId does not exist.',
            );
          });
        });

        it('Should reject if the auction has already started', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          await auctionHouse.createAuction(
            0,
            mediaAddress,
            duration,
            reservePrice,
            await curator.getAddress(),
            0,
            token.address,
          );

          await curatorConnected.startAuction(0, true);

          await curatorConnected.startAuction(0, true).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (startAuction): Auction has already started.',
            );
          });
        });

        it('Should reject if a valid curator does not start the auction', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          await auctionHouse.createAuction(
            0,
            mediaAddress,
            duration,
            reservePrice,
            await curator.getAddress(),
            0,
            token.address,
          );

          await auctionHouse.startAuction(0, true).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (startAuction): Only the curator can start this auction.',
            );
          });
        });

        it('Should start auction if the curator is not a zero address or token owner', async () => {
          const duration = 60 * 60 * 24;
          const reservePrice = BigNumber.from(10).pow(18).div(2);

          await auctionHouse.createAuction(
            0,
            mediaAddress,
            duration,
            reservePrice,
            await curator.getAddress(),
            0,
            token.address,
          );

          await curatorConnected.startAuction(0, true);

          const createdAuction = await auctionHouse.fetchAuction(0);

          expect(parseInt(createdAuction.token.tokenId.toString())).to.equal(0);
          expect(createdAuction.token.mediaContract).to.equal(mediaAddress);
          expect(createdAuction.approved).to.be.true;
          expect(parseInt(createdAuction.duration._hex)).to.equal(60 * 60 * 24);
          expect(createdAuction.curatorFeePercentage).to.equal(0);
          expect(parseInt(createdAuction.reservePrice._hex)).to.equal(parseInt(reservePrice._hex));
          expect(createdAuction.tokenOwner).to.equal(await signer.getAddress());
          expect(createdAuction.curator).to.equal(await curator.getAddress());
          expect(createdAuction.auctionCurrency).to.equal(token.address);
        });
      });

      describe('#setAuctionReservePrice', () => {
        const duration = 60 * 60 * 24;
        const reservePrice = BigNumber.from(10).pow(18).div(2);

        // An instance of the AuctionHouse class that will be connected to signer[0]
        let auctionHouse: AuctionHouse;

        // An instance of the AuctionHouse class that will be connected to signer[9]
        let curatorConnected: AuctionHouse;

        // Will be set to signers[9]
        let curator: Signer;

        // Will be set to signers[4]
        let bidder: Signer;

        beforeEach(async () => {
          // Assign the curator to signer[9]
          curator = signers[9];

          // Assign the bidder to signer[4]
          bidder = signers[4];

          // The owner(signers[0]) connected to the AuctionHouse class as a signer
          auctionHouse = new AuctionHouse(1337, signer);

          // The curator(signers[9]) connected to the AuctionHouse class as a signer
          curatorConnected = new AuctionHouse(1337, curator);

          // The owner(signer[0]) of tokenId 0 approves the auctionHouse
          await media.approve(auctionHouse.auctionHouse.address, 0);

          // The owner(signer[0]) creates the auction
          // The curator is neither a zero address or token owner so the curator has to invoke startAuction
          await auctionHouse.createAuction(
            0,
            mediaAddress,
            duration,
            0,
            await curator.getAddress(),
            0,
            token.address,
          );

          // Transfer 1000 tokens to the bidder
          await token.mint(await bidder.getAddress(), 1000);
        });

        it('Should reject if the auction id does not exist', async () => {
          // The owner(signer[0]) connected to the AuctionHouse class
          // The owner attempts invoke the setAuctionReservePrice on a non existent auction id
          await auctionHouse.setAuctionReservePrice(1, 200).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (fetchAuction): AuctionId does not exist.',
            );
          });
        });

        it('Should reject if not called by the curator or owner', async () => {
          // Bad signer
          const badSigner = signers[8];

          // AuctionHouse class instance
          const badSignerConnected = new AuctionHouse(1337, badSigner);

          // The badSigner(signer[8]) connected to the AuctionHouse class
          // The badSigner attempts invoke the setAuctionReservePrice when its not the curator or token owner
          await badSignerConnected.setAuctionReservePrice(0, 200).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (setAuctionReservePrice): Caller must be the curator or token owner',
            );
          });
        });

        it('Should reject if the auction already started', async () => {
          // The owner(signer[0]) connected to the AuctionHouse class
          // The owner invokes the setAuctionReservePrice
          await auctionHouse.setAuctionReservePrice(0, 200);

          // The curator invokes startAuction
          await curatorConnected.startAuction(0, true);

          // The owner attempts to invoke the setAuctionReserverPrice after the auction has already started
          await auctionHouse.setAuctionReservePrice(0, 200).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (setAuctionReservePrice): Auction has already started.',
            );
          });
        });

        it('Should set the auction reserve price when called by the token owner', async () => {
          // The owner(signer[0]) connected to the AuctionHouse class
          // The owner invokes the setAuctionReservePrice
          await auctionHouse.setAuctionReservePrice(0, 200);

          // The curator invokes startAuction
          await curatorConnected.startAuction(0, true);
        });

        it('Should set the auction reserve price when called by the curator', async () => {
          // The curator(signer[4]) connected to the AuctionHouse class
          // The curator invokes the setAuctionReservePrice
          await curatorConnected.setAuctionReservePrice(0, 200);

          // The curator invokes startAuction
          await curatorConnected.startAuction(0, true);

          // Fetches the details from auction id 0
          const createdAuction = await curatorConnected.fetchAuction(0);

          // The returned tokenId should equal 0
          expect(parseInt(createdAuction.token.tokenId.toString())).to.equal(0);

          // The returned mediaContract address should equal the address the tokenId belongs to
          expect(createdAuction.token.mediaContract).to.equal(mediaAddress);

          // The returned auction approval status should equal true after the curator invokes startAuction
          expect(createdAuction.approved).to.be.true;

          // The returned duration should equal the duration set on createAuction
          expect(parseInt(createdAuction.duration._hex)).to.equal(duration);

          // The returned curatorFeePercentage should equal the fee set on createAuction
          expect(createdAuction.curatorFeePercentage).to.equal(0);

          // The returned reservePrice should equal the amount the curator set on setAuctionReservePrice
          expect(parseInt(createdAuction.reservePrice._hex)).to.equal(200);

          // The returned tokenId owner should equal the address who minted
          expect(createdAuction.tokenOwner).to.equal(await signer.getAddress());

          // The returned curator should equal the address set on createAuction
          expect(createdAuction.curator).to.equal(await curator.getAddress());

          // The returned currency should equal the currency set on createAuction
          expect(createdAuction.auctionCurrency).to.equal(token.address);
        });
      });



    //   describe('#endAuction', () => {
    //     let auctionHouse: AuctionHouse;
    //     let curatorConnected: AuctionHouse;
    //     let curator: Signer;

    //     beforeEach(async () => {
    //       curator = signers[9];
    //       auctionHouse = new AuctionHouse(1337, signer);
    //       curatorConnected = new AuctionHouse(1337, curator);

    //       await media.approve(auctionHouse.auctionHouse.address, 0);
    //     });

    //     it('Should reject if the auctionId does not exist', async () => {
    //       await curatorConnected.startAuction(0, true).catch((err) => {
    //         expect(err.message).to.equal(
    //           'Invariant failed: AuctionHouse (startAuction): AuctionId does not exist.',
    //         );
    //       });
    //     });

    //     it('Should reject if the auction has already started', async () => {
    //       const duration = 60 * 60 * 24;
    //       const reservePrice = BigNumber.from(10).pow(18).div(2);

    //       await auctionHouse.createAuction(
    //         0,
    //         mediaAddress,
    //         duration,
    //         reservePrice,
    //         await curator.getAddress(),
    //         0,
    //         token.address,
    //       );

    //       await curatorConnected.startAuction(0, true);

    //       await curatorConnected.startAuction(0, true).catch((err) => {
    //         expect(err.message).to.equal(
    //           'Invariant failed: AuctionHouse (startAuction): Auction has already started.',
    //         );
    //       });
    //     });

    //     it('Should reject if a valid curator does not start the auction', async () => {
    //       const duration = 60 * 60 * 24;
    //       const reservePrice = BigNumber.from(10).pow(18).div(2);

    //       await auctionHouse.createAuction(
    //         0,
    //         mediaAddress,
    //         duration,
    //         reservePrice,
    //         await curator.getAddress(),
    //         0,
    //         token.address,
    //       );

    //       await auctionHouse.startAuction(0, true).catch((err) => {
    //         expect(err.message).to.equal(
    //           'Invariant failed: AuctionHouse (startAuction): Only the curator can start this auction.',
    //         );
    //       });
    //     });

    //     it('Should start auction if the curator is not a zero address or token owner', async () => {
    //       const duration = 60 * 60 * 24;
    //       const reservePrice = BigNumber.from(10).pow(18).div(2);

    //       await auctionHouse.createAuction(
    //         0,
    //         mediaAddress,
    //         duration,
    //         reservePrice,
    //         await curator.getAddress(),
    //         0,
    //         token.address,
    //       );

    //       await curatorConnected.startAuction(0, true);

    //       const createdAuction = await auctionHouse.fetchAuction(0);

    //       expect(parseInt(createdAuction.token.tokenId.toString())).to.equal(0);
    //       expect(createdAuction.token.mediaContract).to.equal(mediaAddress);
    //       expect(createdAuction.approved).to.be.true;
    //       expect(parseInt(createdAuction.duration._hex)).to.equal(60 * 60 * 24);
    //       expect(createdAuction.curatorFeePercentage).to.equal(0);
    //       expect(parseInt(createdAuction.reservePrice._hex)).to.equal(parseInt(reservePrice._hex));
    //       expect(createdAuction.tokenOwner).to.equal(await signer.getAddress());
    //       expect(createdAuction.curator).to.equal(await curator.getAddress());
    //       expect(createdAuction.auctionCurrency).to.equal(token.address);
    //     });
    //   });
    // // });


    // // // start cancel auction
    // // describe("#cancelAuction", () => {
    // //   let auctionHouse: AuctionHouse;
    // //   let curatorConnected: AuctionHouse;
    // //   let admin: Signer;
    // //   let creator: Signer;
    // //   let curator: Signer;
    // //   let bidder: Signer;

    // //   beforeEach(async () => {
    // //     const auctionHouse = new AuctionHouse(1337, signer);
    // //     curatorConnected = new AuctionHouse(1337, curator);
    // //     await media.mint(mediaData, bidShares);
    // //     await media.approve(auctionHouse.auctionHouse.address, 0);
    // //     // await approveAuction(media1.connect(creator), auctionHouse);

    // //     // await auctionHouse.setTokenDetails(0, media1.address);
    // //     await createAuction(
    // //       auctionHouse.connect(creator),
    // //       await curator.getAddress(),
    // //       zapTokenBsc.address
    // //     );
    // //   });

    // //   it("should revert if the auction does not exist", async () => {
    // //     await expect(auctionHouse.cancelAuction(12213)).revertedWith(
    // //       `Auction doesn't exist`
    // //     );
    // //   });

    // //   it("should revert if not called by a creator or curator", async () => {
    // //     await expect(
    // //       auctionHouse.connect(bidder).cancelAuction(0)
    // //     ).revertedWith(
    // //       `Can only be called by auction creator or curator`
    // //     );
    // //   });

    // //   it("should revert if the auction has already begun", async () => {
    // //     await zapTokenBsc.mint(bidder.address, ONE_ETH);
    // //     await zapTokenBsc.connect(bidder).approve(auctionHouse.address, ONE_ETH);
    // //     await auctionHouse.connect(curator).startAuction(0, true);
    // //     await auctionHouse
    // //       .connect(bidder)
    // //       .createBid(0, ONE_ETH, media1.address);
    // //     await expect(auctionHouse.cancelAuction(0)).revertedWith(
    // //       `You can't cancel an auction that has a bid`
    // //     );
    // //   });

    // //   it("should be callable by the creator", async () => {
    // //     await auctionHouse.cancelAuction(0);

    // //     const auctionResult = await auctionHouse.auctions(0);

    // //     expect(auctionResult.amount.toNumber()).to.eq(0);
    // //     expect(auctionResult.duration.toNumber()).to.eq(0);
    // //     expect(auctionResult.firstBidTime.toNumber()).to.eq(0);
    // //     expect(auctionResult.reservePrice.toNumber()).to.eq(0);
    // //     expect(auctionResult.curatorFeePercentage).to.eq(0);
    // //     expect(auctionResult.tokenOwner).to.eq(ethers.constants.AddressZero);
    // //     expect(auctionResult.bidder).to.eq(ethers.constants.AddressZero);
    // //     expect(auctionResult.curator).to.eq(ethers.constants.AddressZero);
    // //     expect(auctionResult.auctionCurrency).to.eq(ethers.constants.AddressZero);

    // //     expect(await media1.ownerOf(0)).to.eq(await creator.getAddress());
    // //   });

    // //   it("should be callable by the curator", async () => {
    // //     await auctionHouse.connect(curator).cancelAuction(0);

    // //     const auctionResult = await auctionHouse.auctions(0);

    // //     expect(auctionResult.amount.toNumber()).to.eq(0);
    // //     expect(auctionResult.duration.toNumber()).to.eq(0);
    // //     expect(auctionResult.firstBidTime.toNumber()).to.eq(0);
    // //     expect(auctionResult.reservePrice.toNumber()).to.eq(0);
    // //     expect(auctionResult.curatorFeePercentage).to.eq(0);
    // //     expect(auctionResult.tokenOwner).to.eq(ethers.constants.AddressZero);
    // //     expect(auctionResult.bidder).to.eq(ethers.constants.AddressZero);
    // //     expect(auctionResult.curator).to.eq(ethers.constants.AddressZero);
    // //     expect(auctionResult.auctionCurrency).to.eq(ethers.constants.AddressZero);
    // //     expect(await media1.ownerOf(0)).to.eq(await creator.getAddress());
    // //   });

    // //   it("should emit an AuctionCanceled event", async () => {
    // //     const block = await ethers.provider.getBlockNumber();
    // //     await auctionHouse.cancelAuction(0);
    // //     const events = await auctionHouse.queryFilter(
    // //       auctionHouse.filters.AuctionCanceled(0, null, null, null),
    // //       block
    // //     );
    // //     expect(events.length).eq(1);
    // //     const logDescription = auctionHouse.interface.parseLog(events[0]);

    // //     expect(logDescription.args.tokenId.toNumber()).to.eq(0);
    // //     expect(logDescription.args.tokenOwner).to.eq(await creator.getAddress());
    // //     expect(logDescription.args.mediaContract).to.eq(media1.address);
    // //   });
    // // });

    // // start end auction

    describe("#cancelAuction", () => {
      let auctionHouse: AuctionHouse;
      let curatorConnected: AuctionHouse;
      let bidderConnected: AuctionHouse;
      let bidder: Signer;
      let curator: Signer;

      beforeEach(async () => {
        curator = signers[9];
        auctionHouse = new AuctionHouse(1337, signer);
        curatorConnected = new AuctionHouse(1337, curator);

        await media.approve(auctionHouse.auctionHouse.address, 0);
      });

    it("should reject if the auction does not exist", async () => {
      await auctionHouse.cancelAuction(0)
        .catch((err) => {
          console.log('passed: auction not exist');

          expect(err.message).to.equal( 'Invariant failed: AuctionHouse (cancelAuction): Auction does not exist.');
        });
    });

    it('Should reject if the auction has already started', async () => {
      const duration = 60 * 60 * 24;
      const reservePrice = BigNumber.from(10).pow(18).div(2);

      await auctionHouse.createAuction(
        0,
        mediaAddress,
        duration,
        reservePrice,
        await curator.getAddress(),
        0,
        token.address,
      );

      await curatorConnected.startAuction(0, true);

      await curatorConnected.cancelAuction(0).catch((err) => {
        expect(err.message).to.equal(
          'Invariant failed: AuctionHouse (cancelAuction): Auction has already started.',
        );
      });
    });

    it('Should reject if a valid curator does not cancel the auction', async () => {
      const duration = 60 * 60 * 24;
      const reservePrice = BigNumber.from(10).pow(18).div(2);

      await auctionHouse.createAuction(
        0,
        mediaAddress,
        duration,
        reservePrice,
        await curator.getAddress(),
        0,
        token.address,
      );

      await auctionHouse.cancelAuction(0).catch((err) => {
        expect(err.message).to.equal(
          'Invariant failed: AuctionHouse (cancelAuction): Only the curator can cancel this auction.',
        );
      });
    });

    it("should be callable by the curator", async () => {
      // await auctionHouse.cancelAuction(0);
      const duration = 60 * 60 * 24;
        const reservePrice = BigNumber.from(10).pow(18).div(2);

        await auctionHouse.createAuction(
          0,
          mediaAddress,
          duration,
          reservePrice,
          await curator.getAddress(),
          0,
          token.address,
        );

        await curatorConnected.cancelAuction(0);

        const auctionResult = await auctionHouse.fetchAuction(0);

        expect(auctionResult.amount.toNumber()).to.eq(0);
        expect(auctionResult.duration.toNumber()).to.eq(0);
      expect(auctionResult.firstBidTime.toNumber()).to.eq(0);
      expect(auctionResult.reservePrice.toNumber()).to.eq(0);
      expect(auctionResult.curatorFeePercentage).to.eq(0);
      expect(auctionResult.tokenOwner).to.eq(ethers.constants.AddressZero);
      expect(auctionResult.bidder).to.eq(ethers.constants.AddressZero);
      expect(auctionResult.curator).to.eq(ethers.constants.AddressZero);
      expect(auctionResult.auctionCurrency).to.eq(ethers.constants.AddressZero);

      expect(auctionResult.curator).to.eq(ethers.constants.AddressZero);
    });
  });

    // it("should be callable by the curator", async () => {
    //   await auctionHouse.connect(curator).cancelAuction(0);

    //   const auctionResult = await auctionHouse.auctions(0);

    //   expect(auctionResult.amount.toNumber()).to.eq(0);
    //   expect(auctionResult.duration.toNumber()).to.eq(0);
    //   expect(auctionResult.firstBidTime.toNumber()).to.eq(0);
    //   expect(auctionResult.reservePrice.toNumber()).to.eq(0);
    //   expect(auctionResult.curatorFeePercentage).to.eq(0);
    //   expect(auctionResult.tokenOwner).to.eq(ethers.constants.AddressZero);
    //   expect(auctionResult.bidder).to.eq(ethers.constants.AddressZero);
    //   expect(auctionResult.curator).to.eq(ethers.constants.AddressZero);
    //   expect(auctionResult.auctionCurrency).to.eq(ethers.constants.AddressZero);
    //   expect(await media.ownerOf(0)).to.eq(await creator.getAddress());
    // });
    });
    describe('View Functions', () => {
      let media: any;
      let mediaAddress: any;
      let mediaData: any;
      let bidShares: any;

      let tokenURI =
        'https://bafkreievpmtbofalpowrcbr5oaok33e6xivii62r6fxh6fontaglngme2m.ipfs.dweb.link/';
      let metadataURI =
        'https://bafkreihhu7xo7knc3vn42jj26gz3jkvh3uu3rwurkb4djsoo5ayqs2s25a.ipfs.dweb.link/';

      beforeEach(async () => {
        let metadataHex = ethers.utils.formatBytes32String('Test');
        let metadataHashRaw = ethers.utils.keccak256(metadataHex);
        let metadataHashBytes = ethers.utils.arrayify(metadataHashRaw);

        let contentHex = ethers.utils.formatBytes32String('Test Car');
        let contentHashRaw = ethers.utils.keccak256(contentHex);
        let contentHashBytes = ethers.utils.arrayify(contentHashRaw);

        let contentHash = contentHashBytes;
        let metadataHash = metadataHashBytes;

        media = new ZapMedia(1337, signer);
        mediaAddress = zapMediaAddresses['1337'];

        bidShares = constructBidShares(
          [
            await provider.getSigner(1).getAddress(),
            await provider.getSigner(2).getAddress(),
            await provider.getSigner(3).getAddress(),
          ],
          [15, 15, 15],
          15,
          35,
        );

        mediaData = constructMediaData(tokenURI, metadataURI, contentHash, metadataHash);

        await media.mint(mediaData, bidShares);
      });
      describe('Fetch Functions', () => {
        it('Should reject if the auction id does not exist', async () => {
          let auctionHouse = new AuctionHouse(1337, signer);
          await auctionHouse.fetchAuction(3).catch((err) => {
            expect(err.message).to.equal(
              'Invariant failed: AuctionHouse (fetchAuction): AuctionId does not exist.',
            );
          });
        });
      });
    });
  });
});
