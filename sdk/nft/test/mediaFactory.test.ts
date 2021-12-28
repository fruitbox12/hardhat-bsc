import { expect } from 'chai';
import { ethers } from 'ethers';
import { zapMediaAbi } from '../abi';
import { eventNames } from 'process';
import MediaFactory from '../mediaFactory';


const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

describe("MediaFactory", () => {

  let signer0: any
  let mediaFactory: any
  // let deployMedia: any
  let testCollectionAddress: string;

  beforeEach(async () => {

    signer0 = await provider.getSigner(0);

    // Creates 
    mediaFactory = new MediaFactory(31337, signer0);

  })

  it("Should be able to deploy a Media collection", async () => {

    // 
    const deployMedia = await mediaFactory.deployMedia(
      "Test Collection",
      "TC",
      false,
      "ipfs://testing"
    );

    const receipt = await deployMedia.wait();

    const eventLog = receipt.events[receipt.events.length - 1];

    // The event name is "MediaDeployed"
    const eventName = eventLog.event;

    testCollectionAddress = eventLog.args.mediaContract;

    expect(eventName).to.equal('MediaDeployed');

  });

});
