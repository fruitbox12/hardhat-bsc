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

interface RegistryInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "clearEndpoint(bytes32)": FunctionFragment;
    "getAllOracles()": FunctionFragment;
    "getAllProviderParams(address)": FunctionFragment;
    "getEndpointBroker(address,bytes32)": FunctionFragment;
    "getEndpointParams(address,bytes32)": FunctionFragment;
    "getProviderCurve(address,bytes32)": FunctionFragment;
    "getProviderCurveLength(address,bytes32)": FunctionFragment;
    "getProviderEndpoints(address)": FunctionFragment;
    "getProviderParameter(address,bytes32)": FunctionFragment;
    "getProviderPublicKey(address)": FunctionFragment;
    "getProviderTitle(address)": FunctionFragment;
    "initiateProvider(uint256,bytes32)": FunctionFragment;
    "initiateProviderCurve(bytes32,int256[],address)": FunctionFragment;
    "isProviderInitiated(address)": FunctionFragment;
    "setEndpointParams(bytes32,bytes32[])": FunctionFragment;
    "setProviderParameter(bytes32,bytes)": FunctionFragment;
    "setProviderTitle(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "clearEndpoint",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllOracles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProviderParams",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEndpointBroker",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEndpointParams",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderCurve",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderCurveLength",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderEndpoints",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderParameter",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderPublicKey",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderTitle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateProvider",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateProviderCurve",
    values: [BytesLike, BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "isProviderInitiated",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setEndpointParams",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setProviderParameter",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setProviderTitle",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "clearEndpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllOracles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllProviderParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEndpointBroker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEndpointParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderCurve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderCurveLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderEndpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderTitle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateProviderCurve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isProviderInitiated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEndpointParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProviderParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProviderTitle",
    data: BytesLike
  ): Result;

  events: {};
}

export class RegistryInterface extends Contract {
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

  interface: RegistryInterfaceInterface;

  functions: {
    clearEndpoint(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "clearEndpoint(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllOracles(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllOracles()"(overrides?: CallOverrides): Promise<[string[]]>;

    getAllProviderParams(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "getAllProviderParams(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getEndpointBroker(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getEndpointBroker(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getEndpointParams(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "getEndpointParams(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getProviderCurve(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getProviderCurve(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getProviderCurveLength(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getProviderCurveLength(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProviderEndpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "getProviderEndpoints(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getProviderParameter(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getProviderParameter(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProviderPublicKey(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getProviderPublicKey(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProviderTitle(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getProviderTitle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initiateProvider(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initiateProvider(uint256,bytes32)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateProviderCurve(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initiateProviderCurve(bytes32,int256[],address)"(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isProviderInitiated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isProviderInitiated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setEndpointParams(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setEndpointParams(bytes32,bytes32[])"(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProviderParameter(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setProviderParameter(bytes32,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProviderTitle(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setProviderTitle(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  clearEndpoint(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "clearEndpoint(bytes32)"(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllOracles(overrides?: CallOverrides): Promise<string[]>;

  "getAllOracles()"(overrides?: CallOverrides): Promise<string[]>;

  getAllProviderParams(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getAllProviderParams(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getEndpointBroker(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getEndpointBroker(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getEndpointParams(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getEndpointParams(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getProviderCurve(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getProviderCurve(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getProviderCurveLength(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getProviderCurveLength(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProviderEndpoints(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getProviderEndpoints(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getProviderParameter(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getProviderParameter(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getProviderPublicKey(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getProviderPublicKey(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProviderTitle(arg0: string, overrides?: CallOverrides): Promise<string>;

  "getProviderTitle(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initiateProvider(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initiateProvider(uint256,bytes32)"(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateProviderCurve(
    arg0: BytesLike,
    arg1: BigNumberish[],
    arg2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initiateProviderCurve(bytes32,int256[],address)"(
    arg0: BytesLike,
    arg1: BigNumberish[],
    arg2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isProviderInitiated(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isProviderInitiated(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setEndpointParams(
    arg0: BytesLike,
    arg1: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setEndpointParams(bytes32,bytes32[])"(
    arg0: BytesLike,
    arg1: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProviderParameter(
    arg0: BytesLike,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setProviderParameter(bytes32,bytes)"(
    arg0: BytesLike,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProviderTitle(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setProviderTitle(bytes32)"(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    clearEndpoint(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    "clearEndpoint(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllOracles(overrides?: CallOverrides): Promise<string[]>;

    "getAllOracles()"(overrides?: CallOverrides): Promise<string[]>;

    getAllProviderParams(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getAllProviderParams(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getEndpointBroker(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getEndpointBroker(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getEndpointParams(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getEndpointParams(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getProviderCurve(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getProviderCurve(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getProviderCurveLength(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderCurveLength(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderEndpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getProviderEndpoints(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getProviderParameter(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getProviderParameter(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getProviderPublicKey(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderPublicKey(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderTitle(arg0: string, overrides?: CallOverrides): Promise<string>;

    "getProviderTitle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initiateProvider(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "initiateProvider(uint256,bytes32)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initiateProviderCurve(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "initiateProviderCurve(bytes32,int256[],address)"(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isProviderInitiated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isProviderInitiated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setEndpointParams(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setEndpointParams(bytes32,bytes32[])"(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    setProviderParameter(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setProviderParameter(bytes32,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setProviderTitle(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    "setProviderTitle(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    clearEndpoint(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "clearEndpoint(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllOracles(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllOracles()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllProviderParams(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAllProviderParams(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEndpointBroker(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEndpointBroker(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEndpointParams(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEndpointParams(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderCurve(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderCurve(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderCurveLength(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderCurveLength(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderEndpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderEndpoints(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderParameter(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderParameter(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderPublicKey(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderPublicKey(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProviderTitle(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProviderTitle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initiateProvider(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initiateProvider(uint256,bytes32)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateProviderCurve(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initiateProviderCurve(bytes32,int256[],address)"(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isProviderInitiated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isProviderInitiated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setEndpointParams(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setEndpointParams(bytes32,bytes32[])"(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProviderParameter(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setProviderParameter(bytes32,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProviderTitle(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setProviderTitle(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clearEndpoint(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "clearEndpoint(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllOracles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAllOracles()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllProviderParams(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllProviderParams(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEndpointBroker(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEndpointBroker(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEndpointParams(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEndpointParams(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProviderCurve(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProviderCurve(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProviderCurveLength(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProviderCurveLength(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProviderEndpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProviderEndpoints(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProviderParameter(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProviderParameter(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProviderPublicKey(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProviderPublicKey(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProviderTitle(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProviderTitle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initiateProvider(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initiateProvider(uint256,bytes32)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateProviderCurve(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initiateProviderCurve(bytes32,int256[],address)"(
      arg0: BytesLike,
      arg1: BigNumberish[],
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isProviderInitiated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isProviderInitiated(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setEndpointParams(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setEndpointParams(bytes32,bytes32[])"(
      arg0: BytesLike,
      arg1: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProviderParameter(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setProviderParameter(bytes32,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProviderTitle(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setProviderTitle(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
