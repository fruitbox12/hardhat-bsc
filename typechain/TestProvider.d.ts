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

interface TestProviderInterface extends ethers.utils.Interface {
  functions: {
    "receiveQuery(uint256,string,bytes32,bytes32[],bool)": FunctionFragment;
    "spec1()": FunctionFragment;
    "spec2()": FunctionFragment;
    "spec3()": FunctionFragment;
    "spec4()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "receiveQuery",
    values: [BigNumberish, string, BytesLike, BytesLike[], boolean]
  ): string;
  encodeFunctionData(functionFragment: "spec1", values?: undefined): string;
  encodeFunctionData(functionFragment: "spec2", values?: undefined): string;
  encodeFunctionData(functionFragment: "spec3", values?: undefined): string;
  encodeFunctionData(functionFragment: "spec4", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "receiveQuery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spec1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spec2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spec3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spec4", data: BytesLike): Result;

  events: {
    "RecievedQuery(string,bytes32,bytes32[])": EventFragment;
    "TEST(uint256,bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RecievedQuery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TEST"): EventFragment;
}

export class TestProvider extends Contract {
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

  interface: TestProviderInterface;

  functions: {
    receiveQuery(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "receiveQuery(uint256,string,bytes32,bytes32[],bool)"(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spec1(overrides?: CallOverrides): Promise<[string]>;

    "spec1()"(overrides?: CallOverrides): Promise<[string]>;

    spec2(overrides?: CallOverrides): Promise<[string]>;

    "spec2()"(overrides?: CallOverrides): Promise<[string]>;

    spec3(overrides?: CallOverrides): Promise<[string]>;

    "spec3()"(overrides?: CallOverrides): Promise<[string]>;

    spec4(overrides?: CallOverrides): Promise<[string]>;

    "spec4()"(overrides?: CallOverrides): Promise<[string]>;
  };

  receiveQuery(
    id: BigNumberish,
    userQuery: string,
    endpoint: BytesLike,
    endpointParams: BytesLike[],
    onchainSubscriber: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "receiveQuery(uint256,string,bytes32,bytes32[],bool)"(
    id: BigNumberish,
    userQuery: string,
    endpoint: BytesLike,
    endpointParams: BytesLike[],
    onchainSubscriber: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spec1(overrides?: CallOverrides): Promise<string>;

  "spec1()"(overrides?: CallOverrides): Promise<string>;

  spec2(overrides?: CallOverrides): Promise<string>;

  "spec2()"(overrides?: CallOverrides): Promise<string>;

  spec3(overrides?: CallOverrides): Promise<string>;

  "spec3()"(overrides?: CallOverrides): Promise<string>;

  spec4(overrides?: CallOverrides): Promise<string>;

  "spec4()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    receiveQuery(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveQuery(uint256,string,bytes32,bytes32[],bool)"(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    spec1(overrides?: CallOverrides): Promise<string>;

    "spec1()"(overrides?: CallOverrides): Promise<string>;

    spec2(overrides?: CallOverrides): Promise<string>;

    "spec2()"(overrides?: CallOverrides): Promise<string>;

    spec3(overrides?: CallOverrides): Promise<string>;

    "spec3()"(overrides?: CallOverrides): Promise<string>;

    spec4(overrides?: CallOverrides): Promise<string>;

    "spec4()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    RecievedQuery(
      query: null,
      endpoint: null,
      params: null
    ): TypedEventFilter<
      [string, string, string[]],
      { query: string; endpoint: string; params: string[] }
    >;

    TEST(
      res: null,
      b: null,
      s: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { res: BigNumber; b: string; s: string }
    >;
  };

  estimateGas: {
    receiveQuery(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "receiveQuery(uint256,string,bytes32,bytes32[],bool)"(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spec1(overrides?: CallOverrides): Promise<BigNumber>;

    "spec1()"(overrides?: CallOverrides): Promise<BigNumber>;

    spec2(overrides?: CallOverrides): Promise<BigNumber>;

    "spec2()"(overrides?: CallOverrides): Promise<BigNumber>;

    spec3(overrides?: CallOverrides): Promise<BigNumber>;

    "spec3()"(overrides?: CallOverrides): Promise<BigNumber>;

    spec4(overrides?: CallOverrides): Promise<BigNumber>;

    "spec4()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    receiveQuery(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "receiveQuery(uint256,string,bytes32,bytes32[],bool)"(
      id: BigNumberish,
      userQuery: string,
      endpoint: BytesLike,
      endpointParams: BytesLike[],
      onchainSubscriber: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spec1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spec1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    spec2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spec2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    spec3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spec3()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    spec4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spec4()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
