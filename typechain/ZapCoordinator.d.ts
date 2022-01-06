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

interface ZapCoordinatorInterface extends ethers.utils.Interface {
  functions: {
    "addImmutableContract(string,address)": FunctionFragment;
    "db()": FunctionFragment;
    "getContract(string)": FunctionFragment;
    "getContractName(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "loadedContracts(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAllDependencies()": FunctionFragment;
    "updateContract(string,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addImmutableContract",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "db", values?: undefined): string;
  encodeFunctionData(functionFragment: "getContract", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getContractName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "loadedContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAllDependencies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateContract",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addImmutableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "db", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "loadedContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAllDependencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateContract",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdatedContract(string,address,address)": EventFragment;
    "UpdatedDependencies(uint256,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedDependencies"): EventFragment;
}

export class ZapCoordinator extends Contract {
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

  interface: ZapCoordinatorInterface;

  functions: {
    addImmutableContract(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addImmutableContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    db(overrides?: CallOverrides): Promise<[string]>;

    "db()"(overrides?: CallOverrides): Promise<[string]>;

    getContract(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getContract(string)"(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getContractName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getContractName(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    "getOwner()"(overrides?: CallOverrides): Promise<[string]>;

    loadedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "loadedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAllDependencies(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateAllDependencies()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateContract(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addImmutableContract(
    contractName: string,
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addImmutableContract(string,address)"(
    contractName: string,
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  db(overrides?: CallOverrides): Promise<string>;

  "db()"(overrides?: CallOverrides): Promise<string>;

  getContract(contractName: string, overrides?: CallOverrides): Promise<string>;

  "getContract(string)"(
    contractName: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getContractName(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getContractName(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  "getOwner()"(overrides?: CallOverrides): Promise<string>;

  loadedContracts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "loadedContracts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAllDependencies(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateAllDependencies()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateContract(
    contractName: string,
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateContract(string,address)"(
    contractName: string,
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addImmutableContract(
      contractName: string,
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addImmutableContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    db(overrides?: CallOverrides): Promise<string>;

    "db()"(overrides?: CallOverrides): Promise<string>;

    getContract(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getContract(string)"(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getContractName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getContractName(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    "getOwner()"(overrides?: CallOverrides): Promise<string>;

    loadedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "loadedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAllDependencies(overrides?: CallOverrides): Promise<void>;

    "updateAllDependencies()"(overrides?: CallOverrides): Promise<void>;

    updateContract(
      contractName: string,
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    UpdatedContract(
      name: null,
      previousAddr: null,
      newAddr: null
    ): TypedEventFilter<
      [string, string, string],
      { name: string; previousAddr: string; newAddr: string }
    >;

    UpdatedDependencies(
      timestamp: null,
      contractName: null,
      contractAddr: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; contractName: string; contractAddr: string }
    >;
  };

  estimateGas: {
    addImmutableContract(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addImmutableContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    db(overrides?: CallOverrides): Promise<BigNumber>;

    "db()"(overrides?: CallOverrides): Promise<BigNumber>;

    getContract(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getContract(string)"(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContractName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getContractName(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "getOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    loadedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "loadedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAllDependencies(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateAllDependencies()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateContract(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addImmutableContract(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addImmutableContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    db(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "db()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContract(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContract(string)"(
      contractName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContractName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContractName(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    loadedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "loadedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAllDependencies(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateAllDependencies()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateContract(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateContract(string,address)"(
      contractName: string,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
