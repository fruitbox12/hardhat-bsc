import { ethers, upgrades } from "hardhat";
import { BigNumber, Event } from 'ethers';
import { keccak256 } from "ethers/lib/utils";
import { getImplementationAddress } from '@openzeppelin/upgrades-core';
import { MediaFactory, ZapMedia, ZapVault } from "../typechain";
import hre from 'hardhat';

const ZapMarketAddress = '0x8E85743faA25b305967609E2a5E4FA32Ea092cc4';
const ZapMediaImplementationAddress = '0x6852ee80fb02ED5e7bEB2B11E4f1F4FAFA24a82d';
const MediaFactoryAddress = '0xeC57c2f02Bc13aB37611e0E4c9B4Bf80f5511E5B'

// const ZapMarketABI = require('./artifacts/contracts/nft/ZapMarket.sol/ZapMarket.json').abi;
const ZapMediaABI = require('../artifacts/contracts/nft/ZapMedia.sol/ZapMedia.json').abi;

async function main() {
    const chainId = await (await ethers.provider.getNetwork()).chainId;

    if (chainId == 1) {
        console.log('ON REAL MAINNET!!!');
        return;
    } else {
        console.log("Not on MAINNET")
    }

    const signers = await ethers.getSigners();

    // create zapMarket from already deployed address
    const zapMarketFactory = await ethers.getContractFactory('ZapMarket');    
    const zapMarket = await zapMarketFactory.attach(ZapMarketAddress);
    
    console.log(await zapMarket.getOwner());
    console.log(await zapMarket.viewFee());
    
    
    // create zapMediaImplementation from already deployed address
    const zapMediaImplementationFactory = await ethers.getContractFactory('ZapMedia');    
    const zapMediaImplementation = await zapMediaImplementationFactory.attach(ZapMediaImplementationAddress);

    console.log('Owner before: ', await zapMediaImplementation.getOwner());
    console.log(await zapMediaImplementation.contractURI());
    

    const name = '';    
    let symbol = '';    
    let contractURI = '';
    // const name = 'Zap Implementation';    
    // let symbol = 'ZAPI';    
    // let contractURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/mainnet';
    
    const gas = await zapMediaImplementation.estimateGas.initialize(
        name,
        symbol,
        ZapMarketAddress,
        false,
        contractURI
    );
    console.log("gas estimate: ", gas);

    await zapMediaImplementation
    .connect(signers[0])
    .initialize(
        name,
        symbol,
        ZapMarketAddress,
        false,
        contractURI,
        { gasLimit: gas}
    );

    console.log('Owner after: ', await zapMediaImplementation.getOwner());
    console.log("Name: ", await zapMediaImplementation.name());
    console.log("Symbol: ", await zapMediaImplementation.symbol());
    console.log("ContractURI: ",
      ethers.utils.toUtf8String(await zapMediaImplementation.contractURI())
    );

    const mfFactory = await ethers.getContractFactory('MediaFactory');
    const mediaFactory = await mfFactory.attach(MediaFactoryAddress) as MediaFactory;

    const tx = await mediaFactory.deployMedia(
        "Test Media 1",
        "TM1",
        ZapMarketAddress,
        true,
        "https://ipfs.moralis.io:2053/ipfs/QmeWPdpXmNP4UF9Urxyrp7NQZ9unaHfE2d43fbuur6hWWV"
    );

    const receipt = await tx.wait();
    const mediaDeployedEvents = receipt.events as Event[];
    const mediaDeployedEvent = mediaDeployedEvents.slice(-1);
    const zapMediaAddress = mediaDeployedEvent[0].args?.mediaContract;

    const zapMedia = new ethers.Contract(zapMediaAddress, ZapMediaABI, signers[0]) as ZapMedia;

    const metadataHex = ethers.utils.formatBytes32String("{}");
    const metadataHash = await keccak256(metadataHex);
    const hash = ethers.utils.arrayify(metadataHash);

    await zapMedia.connect((await ethers.getSigners())[5]).mint(
        {
            tokenURI: "zap.co",
            metadataURI: "zap.co",
            contentHash: hash,
            metadataHash: hash,
          },
          {
            collaborators: [
              signers[3].address,
              signers[4].address,
              signers[5].address
            ],
            collabShares: [
              BigNumber.from('15000000000000000000'),
              BigNumber.from('15000000000000000000'),
              BigNumber.from('15000000000000000000')
            ]
            ,
            creator: {
              value: BigNumber.from('15000000000000000000')
            },
            owner: {
              value: BigNumber.from('35000000000000000000')
            },

          }
    );

    console.log("Owner of minted token: ", (await zapMedia.ownerOf(0)))
}

main()
.then(() =>
    process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
