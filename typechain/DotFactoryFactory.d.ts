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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DotFactoryFactoryInterface extends ethers.utils.Interface {
  functions: {
    "coordinator()": FunctionFragment;
    "deployFactory(uint256,bytes32)": FunctionFragment;
    "deployedFactories(uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "getFactories()": FunctionFragment;
    "providerTitles(uint256)": FunctionFragment;
    "pubkeys(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "coordinator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployFactory",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deployedFactories",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFactories",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "providerTitles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pubkeys",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "coordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployedFactories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFactories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerTitles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pubkeys", data: BytesLike): Result;

  events: {
    "newDotFactory(address,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "newDotFactory"): EventFragment;
}

export class DotFactoryFactory extends Contract {
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

  interface: DotFactoryFactoryInterface;

  functions: {
    coordinator(overrides?: CallOverrides): Promise<[string]>;

    "coordinator()"(overrides?: CallOverrides): Promise<[string]>;

    deployFactory(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deployFactory(uint256,bytes32)"(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployedFactories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "deployedFactories(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    getFactories(
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[], string[]]>;

    "getFactories()"(
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[], string[]]>;

    providerTitles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "providerTitles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pubkeys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pubkeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  coordinator(overrides?: CallOverrides): Promise<string>;

  "coordinator()"(overrides?: CallOverrides): Promise<string>;

  deployFactory(
    providerPubKey: BigNumberish,
    providerTitle: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deployFactory(uint256,bytes32)"(
    providerPubKey: BigNumberish,
    providerTitle: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployedFactories(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "deployedFactories(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  getFactories(
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[], string[]]>;

  "getFactories()"(
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[], string[]]>;

  providerTitles(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "providerTitles(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  pubkeys(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "pubkeys(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    coordinator(overrides?: CallOverrides): Promise<string>;

    "coordinator()"(overrides?: CallOverrides): Promise<string>;

    deployFactory(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployFactory(uint256,bytes32)"(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    deployedFactories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployedFactories(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    getFactories(
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[], string[]]>;

    "getFactories()"(
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[], string[]]>;

    providerTitles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "providerTitles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    pubkeys(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "pubkeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    newDotFactory(
      dotfactory: null,
      PubKey: null,
      Title: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { dotfactory: string; PubKey: BigNumber; Title: string }
    >;
  };

  estimateGas: {
    coordinator(overrides?: CallOverrides): Promise<BigNumber>;

    "coordinator()"(overrides?: CallOverrides): Promise<BigNumber>;

    deployFactory(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deployFactory(uint256,bytes32)"(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployedFactories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deployedFactories(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFactories(overrides?: CallOverrides): Promise<BigNumber>;

    "getFactories()"(overrides?: CallOverrides): Promise<BigNumber>;

    providerTitles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "providerTitles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pubkeys(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "pubkeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    coordinator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "coordinator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployFactory(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deployFactory(uint256,bytes32)"(
      providerPubKey: BigNumberish,
      providerTitle: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployedFactories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deployedFactories(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFactories(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getFactories()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providerTitles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "providerTitles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pubkeys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pubkeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
