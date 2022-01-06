/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IAuctionHouseInterface extends ethers.utils.Interface {
  functions: {
    "cancelAuction(uint256)": FunctionFragment;
    "createAuction(uint256,address,uint256,uint256,address,uint8,address)": FunctionFragment;
    "createBid(uint256,uint256,address)": FunctionFragment;
    "endAuction(uint256,address)": FunctionFragment;
    "setAuctionReservePrice(uint256,uint256)": FunctionFragment;
    "startAuction(uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createBid",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "endAuction",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionReservePrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endAuction", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionReservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;

  events: {
    "AuctionApprovalUpdated(uint256,uint256,address,bool)": EventFragment;
    "AuctionBid(uint256,uint256,address,address,uint256,bool,bool)": EventFragment;
    "AuctionCanceled(uint256,uint256,address,address)": EventFragment;
    "AuctionCreated(uint256,uint256,address,uint256,uint256,address,address,uint8,address)": EventFragment;
    "AuctionDurationExtended(uint256,uint256,address,uint256)": EventFragment;
    "AuctionEnded(uint256,uint256,address,address,address,address,uint256,uint256,address)": EventFragment;
    "AuctionReservePriceUpdated(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionApprovalUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionDurationExtended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionReservePriceUpdated"): EventFragment;
}

export class IAuctionHouse extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IAuctionHouseInterface;

  functions: {
    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createAuction(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createBid(uint256,uint256,address)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endAuction(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "endAuction(uint256,address)"(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startAuction(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "startAuction(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancelAuction(
    auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelAuction(uint256)"(
    auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createAuction(
    tokenId: BigNumberish,
    mediaContract: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentages: BigNumberish,
    auctionCurrency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
    tokenId: BigNumberish,
    mediaContract: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentages: BigNumberish,
    auctionCurrency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createBid(
    auctionId: BigNumberish,
    amount: BigNumberish,
    mediaContract: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createBid(uint256,uint256,address)"(
    auctionId: BigNumberish,
    amount: BigNumberish,
    mediaContract: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endAuction(
    auctionId: BigNumberish,
    mediaContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "endAuction(uint256,address)"(
    auctionId: BigNumberish,
    mediaContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuctionReservePrice(
    auctionId: BigNumberish,
    reservePrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAuctionReservePrice(uint256,uint256)"(
    auctionId: BigNumberish,
    reservePrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startAuction(
    auctionId: BigNumberish,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "startAuction(uint256,bool)"(
    auctionId: BigNumberish,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createAuction(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createBid(uint256,uint256,address)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    endAuction(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "endAuction(uint256,address)"(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startAuction(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "startAuction(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AuctionApprovalUpdated(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      mediaContract: string | null,
      approved: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, boolean],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        approved: boolean;
      }
    >;

    AuctionBid(
      auctionId: BigNumberish | null,
      tokenId: null,
      mediaContract: null,
      sender: null,
      value: null,
      firstBid: null,
      extended: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string, BigNumber, boolean, boolean],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        sender: string;
        value: BigNumber;
        firstBid: boolean;
        extended: boolean;
      }
    >;

    AuctionCanceled(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      mediaContract: string | null,
      tokenOwner: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        tokenOwner: string;
      }
    >;

    AuctionCreated(
      auctionId: BigNumberish | null,
      tokenId: null,
      mediaContract: string | null,
      duration: null,
      reservePrice: null,
      tokenOwner: null,
      curator: null,
      curatorFeePercentage: null,
      auctionCurrency: null
    ): TypedEventFilter<
      [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        string
      ],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        duration: BigNumber;
        reservePrice: BigNumber;
        tokenOwner: string;
        curator: string;
        curatorFeePercentage: number;
        auctionCurrency: string;
      }
    >;

    AuctionDurationExtended(
      auctionId: BigNumberish | null,
      tokenId: null,
      mediaContract: string | null,
      duration: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        duration: BigNumber;
      }
    >;

    AuctionEnded(
      auctionId: BigNumberish | null,
      tokenId: null,
      mediaContract: string | null,
      tokenOwner: null,
      curator: null,
      winner: null,
      amount: null,
      curatorFee: null,
      auctionCurrency: null
    ): TypedEventFilter<
      [
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string
      ],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        tokenOwner: string;
        curator: string;
        winner: string;
        amount: BigNumber;
        curatorFee: BigNumber;
        auctionCurrency: string;
      }
    >;

    AuctionReservePriceUpdated(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      mediaContract: string | null,
      reservePrice: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber],
      {
        auctionId: BigNumber;
        tokenId: BigNumber;
        mediaContract: string;
        reservePrice: BigNumber;
      }
    >;
  };

  estimateGas: {
    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createAuction(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createBid(uint256,uint256,address)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endAuction(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "endAuction(uint256,address)"(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startAuction(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "startAuction(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createAuction(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      mediaContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createBid(uint256,uint256,address)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      mediaContract: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endAuction(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "endAuction(uint256,address)"(
      auctionId: BigNumberish,
      mediaContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startAuction(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "startAuction(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
