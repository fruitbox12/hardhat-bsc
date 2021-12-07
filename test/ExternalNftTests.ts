import { ethers, upgrades, deployments, getNamedAccounts, } from 'hardhat';

import { BigNumber, ContractFactory, Event, EventFilter } from 'ethers';

import { ZapMarket, ZapMedia, Creature, MockProxyRegistry, ZapVault, ZapMarketV2, NewProxyAdmin, MediaFactory, MediaFactoryV2, ZapTokenBSC } from '../typechain';

import { getProxyAdminFactory } from '@openzeppelin/hardhat-upgrades/dist/utils';

import { solidity } from 'ethereum-waffle';

import chai, { expect } from 'chai';
import { sign } from 'crypto';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';


describe("Testing", () => {

    let signers: SignerWithAddress[]
    let zapTokenBsc: ZapTokenBSC
    let zapVault: ZapVault
    let zapMarket: ZapMarket
    let zapMarketFactory: any
    let zapMediaFactory: any
    let mediaFactoryFactory: any
    let mediaImpl: ZapMedia;
    let mediaFactory: MediaFactory
    let zapMedia: ZapMedia
    let zapMarketV2: ZapMarketV2
    let proxy: MockProxyRegistry
    let osCreature: Creature

    const name = 'Zap Collection';
    const symbol = 'ZAP';
    const contractURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/';

    let tokenURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/rinkeby'
    let metadataURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/rinkeby'

    let metadataHex = ethers.utils.formatBytes32String('Testing');
    let metadataHashRaw = ethers.utils.keccak256(metadataHex);
    let metadataHashBytes = ethers.utils.arrayify(metadataHashRaw);

    let contentHex = ethers.utils.formatBytes32String('Testing');
    let contentHashRaw = ethers.utils.keccak256(contentHex);
    let contentHashBytes = ethers.utils.arrayify(contentHashRaw);

    let contentHash = contentHashBytes;
    let metadataHash = metadataHashBytes;

    const data = {
        tokenURI,
        metadataURI,
        contentHash,
        metadataHash
    };

    let bidShares = {
        collaborators: ["", "", ""],
        collabShares: [
            BigNumber.from('15000000000000000000'),
            BigNumber.from('15000000000000000000'),
            BigNumber.from('15000000000000000000')
        ],
        creator: {
            value: BigNumber.from('15000000000000000000')
        },
        owner: {
            value: BigNumber.from('35000000000000000000')
        },
    };

    let ask1 = {
        amount: 100,
        currency: '',
        sellOnShare: 0
    };

    describe("#Upgradeablity: External NFT Initialization", () => {

        let mediaFactoryV2: MediaFactoryV2

        beforeEach(async () => {

            signers = await ethers.getSigners();

            // Gets the deployed NFT contract fixtures from the 
            await deployments.fixture();

            // Gets the ZapTokenBSC contract deployment
            const zapTokenBscFactory = await deployments.get('ZapTokenBSC');

            // Gets the ZapVault contract deployment
            const zapVaultFactory = await deployments.get('ZapVault');

            // Gets the ZapMarket contract deployment
            zapMarketFactory = await deployments.get('ZapMarket');

            // Gets the MediaFactory contract deployment
            mediaFactoryFactory = await deployments.get('MediaFactory');

            // Gets the ZapMedia implementation deployment
            zapMediaFactory = await deployments.get('ZapMedia');

            // Deploy NewProxyAdmin contract
            const newProxyAdminFactory = await ethers.getContractFactory("NewProxyAdmin", signers[0]);
            const newProxyAdmin = await newProxyAdminFactory.deploy() as NewProxyAdmin;
            await newProxyAdmin.deployed();

            const defaultProxyAdminDeployment = await deployments.get('DefaultProxyAdmin');

            const defaultProxyAdmin = new ethers.Contract(
                defaultProxyAdminDeployment.address,
                defaultProxyAdminDeployment.abi,
                signers[0]
            );

            zapTokenBsc = await ethers.getContractAt(
                'ZapTokenBSC',
                zapTokenBscFactory.address,
                signers[0]
            ) as ZapTokenBSC;

            zapVault = await ethers.getContractAt(
                'ZapVault',
                zapVaultFactory.address,
                signers[0]
            ) as ZapVault;

            // ZapMarket contract instance
            zapMarket = await ethers.getContractAt(
                'ZapMarket',
                zapMarketFactory.address,
                signers[0]
            ) as ZapMarket;


            // MediaFactory contract instance
            mediaFactory = await ethers.getContractAt(
                'MediaFactory',
                mediaFactoryFactory.address,
                signers[0]
            ) as MediaFactory;

            // Deploy ZapMedia
            await mediaFactory.deployMedia(
                name,
                symbol,
                zapMarket.address,
                true,
                contractURI,
            );

            // Filter for the MediaDeployed event
            const filter = mediaFactory.filters.MediaDeployed(null);

            // Query for the MediaDeployed event
            const event = (await mediaFactory.queryFilter(filter))[0];

            // Store the zapMedia address
            const mediaAddress = event.args.mediaContract;

            // ZapMedia contract instance
            zapMedia = new ethers.Contract(mediaAddress, zapMediaFactory.abi, signers[0]) as ZapMedia;

            // Sets the token collaborators
            bidShares.collaborators = [signers[1].address, signers[2].address, signers[3].address];

            // Signer[0] mints a token
            // tokenId is currently 0
            await zapMedia.mint(data, bidShares);

            ask1.currency = zapTokenBsc.address;

            await zapMedia.setAsk(
                0,
                ask1
            );

            const proxyFactory = await ethers.getContractFactory(
                'MockProxyRegistry',
                signers[0]
            )

            proxy = (await proxyFactory.deploy()) as MockProxyRegistry;
            await proxy.deployed();

            await proxy.setProxy(signers[0].address, signers[0].address);
            const oscreatureFactory = await ethers.getContractFactory(
                'Creature',
                signers[0]
            )

            osCreature = (await oscreatureFactory.deploy(proxy.address)) as Creature;
            await osCreature.deployed();

            await osCreature.mintTo(signers[0].address);



            //*****************************************************************************
            //  UPGRADING TO ZapMarketV2 & MediaFactoryV2
            //*****************************************************************************

            const ZapMarketV2 = await ethers.getContractFactory('ZapMarketV2', signers[0]);
            const MediaFactoryV2 = await ethers.getContractFactory('MediaFactoryV2', signers[0]);

            const proxyAdmin = await upgrades.erc1967.getAdminAddress(zapMarketFactory.address);

            await deployments.deploy('ZapMarket', {
                from: signers[0].address,
                contract: "ZapMarketV2",
                proxy: {
                    proxyContract: 'OpenZeppelinTransparentProxy',
                },
                log: true,
            })

            await deployments.deploy('MediaFactory', {
                from: signers[0].address,
                contract: "MediaFactoryV2",
                proxy: {
                    proxyContract: 'OpenZeppelinTransparentProxy',
                },
                log: true,
            })

            zapMarketV2 = new ethers.Contract(
                zapMarketFactory.address, ZapMarketV2.interface, signers[0]
            ) as ZapMarketV2;

            mediaFactoryV2 = new ethers.Contract(
                mediaFactoryFactory.address, MediaFactoryV2.interface, signers[0]
            ) as MediaFactoryV2

            mediaFactoryV2.configureExternalToken(
                osCreature.address,
                1,
                bidShares
            );
        })

        it("Should be registered to MediaFactoryV2", async () => {

            const isRegistered = await zapMarketV2.isRegistered(osCreature.address);

            expect(isRegistered).to.be.true;

        })

        it("Should be configured to ZapMarketV2", async () => {

            const isConfigured = await zapMarketV2._isConfigured(osCreature.address);

            expect(isConfigured).to.be.true;

        })

        it("Should emit a MediaContractCreated event", async () => {

            const filter: EventFilter = zapMarketV2.filters.MediaContractCreated(
                null,
                null,
                null
            );

            const event: Event = (
                await zapMarketV2.queryFilter(filter)
            )[2]

            expect(event.event).to.be.equal("MediaContractCreated");
            expect(event.args?.mediaContract).to.equal(osCreature.address);
            expect(ethers.utils.parseBytes32String(event.args?.name)).to.be.equal(await osCreature.name());
            expect(ethers.utils.parseBytes32String(event.args?.symbol)).to.be.equal(await osCreature.symbol());

        });


    })

});

