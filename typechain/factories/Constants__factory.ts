/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Constants } from "../Constants";

export class Constants__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Constants> {
    return super.deploy(overrides || {}) as Promise<Constants>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Constants {
    return super.attach(address) as Constants;
  }
  connect(signer: Signer): Constants__factory {
    return super.connect(signer) as Constants__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Constants {
    return new Contract(address, _abi, signerOrProvider) as Constants;
  }
}

const _abi = [
  {
    inputs: [],
    name: "MINT_WITH_SIG_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60d6610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806330adf81f146042578063de5236fb14607a575b600080fd5b60687f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b60405190815260200160405180910390f35b60687f2952e482b8e2b192305f87374d7af45dc2eafafe4f50d26a0c02e90f2fdbe14b8156fea26469706673582212209fa863d9484d1579c019fbe6722e83d04a03a7af2230e07a5e54a6f1ca9f9a6c64736f6c63430008040033";
