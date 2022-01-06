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

interface MultiPartyOracleInterface extends ethers.utils.Interface {
  functions: {
    "callback(uint256,uint256[],bytes32[],uint8[],bytes32[])": FunctionFragment;
    "payout()": FunctionFragment;
    "receiveQuery(uint256,string,bytes32,bytes32[],bool)": FunctionFragment;
    "setup(address[])": FunctionFragment;
    "spec3()": FunctionFragment;
    "storageAddress()": FunctionFragment;
    "withdrawBalance()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callback",
    values: [
      BigNumberish,
      BigNumberish[],
      BytesLike[],
      BigNumberish[],
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "payout", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiveQuery",
    values: [BigNumberish, string, BytesLike, BytesLike[], boolean]
  ): string;
  encodeFunctionData(functionFragment: "setup", values: [string[]]): string;
  encodeFunctionData(functionFragment: "spec3", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "storageAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "callback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payout", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveQuery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spec3", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storageAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBalance",
    data: BytesLike
  ): Result;

  events: {
    "Incoming(uint256,address,address,string,bytes32,bytes32[],bool)": EventFragment;
    "ReceivedResponse(uint256,address,string)": EventFragment;
    "RecievedQuery(string,bytes32,bytes32[],address)": EventFragment;
    "Result1(uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Incoming"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceivedResponse"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecievedQuery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Result1"): EventFragment;
}

export class MultiPartyOracle extends Contract {
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

  interface: MultiPartyOracleInterface;

  functions: {
    callback(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callback(uint256,uint256[],bytes32[],uint8[],bytes32[])"(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "payout()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    setup(
      _responders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setup(address[])"(
      _responders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spec3(overrides?: CallOverrides): Promise<[string]>;

    "spec3()"(overrides?: CallOverrides): Promise<[string]>;

    storageAddress(overrides?: CallOverrides): Promise<[string]>;

    "storageAddress()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawBalance()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  callback(
    mpoId: BigNumberish,
    responses: BigNumberish[],
    msgHash: BytesLike[],
    sigv: BigNumberish[],
    sigrs: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callback(uint256,uint256[],bytes32[],uint8[],bytes32[])"(
    mpoId: BigNumberish,
    responses: BigNumberish[],
    msgHash: BytesLike[],
    sigv: BigNumberish[],
    sigrs: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payout(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "payout()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  setup(
    _responders: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setup(address[])"(
    _responders: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spec3(overrides?: CallOverrides): Promise<string>;

  "spec3()"(overrides?: CallOverrides): Promise<string>;

  storageAddress(overrides?: CallOverrides): Promise<string>;

  "storageAddress()"(overrides?: CallOverrides): Promise<string>;

  withdrawBalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawBalance()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callback(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "callback(uint256,uint256[],bytes32[],uint8[],bytes32[])"(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    payout(overrides?: CallOverrides): Promise<void>;

    "payout()"(overrides?: CallOverrides): Promise<void>;

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

    setup(_responders: string[], overrides?: CallOverrides): Promise<void>;

    "setup(address[])"(
      _responders: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    spec3(overrides?: CallOverrides): Promise<string>;

    "spec3()"(overrides?: CallOverrides): Promise<string>;

    storageAddress(overrides?: CallOverrides): Promise<string>;

    "storageAddress()"(overrides?: CallOverrides): Promise<string>;

    withdrawBalance(overrides?: CallOverrides): Promise<void>;

    "withdrawBalance()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Incoming(
      id: null,
      provider: null,
      subscriber: null,
      query: null,
      endpoint: null,
      endpointParams: null,
      onchainSubscriber: null
    ): TypedEventFilter<
      [BigNumber, string, string, string, string, string[], boolean],
      {
        id: BigNumber;
        provider: string;
        subscriber: string;
        query: string;
        endpoint: string;
        endpointParams: string[];
        onchainSubscriber: boolean;
      }
    >;

    ReceivedResponse(
      queryId: null,
      responder: null,
      response: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { queryId: BigNumber; responder: string; response: string }
    >;

    RecievedQuery(
      query: null,
      endpoint: null,
      params: null,
      sender: null
    ): TypedEventFilter<
      [string, string, string[], string],
      { query: string; endpoint: string; params: string[]; sender: string }
    >;

    Result1(
      id: null,
      response1: null
    ): TypedEventFilter<
      [BigNumber, string],
      { id: BigNumber; response1: string }
    >;
  };

  estimateGas: {
    callback(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callback(uint256,uint256[],bytes32[],uint8[],bytes32[])"(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "payout()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    setup(
      _responders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setup(address[])"(
      _responders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spec3(overrides?: CallOverrides): Promise<BigNumber>;

    "spec3()"(overrides?: CallOverrides): Promise<BigNumber>;

    storageAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "storageAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawBalance()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callback(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callback(uint256,uint256[],bytes32[],uint8[],bytes32[])"(
      mpoId: BigNumberish,
      responses: BigNumberish[],
      msgHash: BytesLike[],
      sigv: BigNumberish[],
      sigrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "payout()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    setup(
      _responders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setup(address[])"(
      _responders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spec3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spec3()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    storageAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "storageAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawBalance()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
