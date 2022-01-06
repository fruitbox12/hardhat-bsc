/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PriceClient } from "../PriceClient";

export class PriceClient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    tokenAddress: string,
    dispatchAddress: string,
    bondageAddress: string,
    registryAddress: string,
    oracleAddr: string,
    query: string,
    specifier: BytesLike,
    params: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceClient> {
    return super.deploy(
      tokenAddress,
      dispatchAddress,
      bondageAddress,
      registryAddress,
      oracleAddr,
      query,
      specifier,
      params,
      overrides || {}
    ) as Promise<PriceClient>;
  }
  getDeployTransaction(
    tokenAddress: string,
    dispatchAddress: string,
    bondageAddress: string,
    registryAddress: string,
    oracleAddr: string,
    query: string,
    specifier: BytesLike,
    params: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenAddress,
      dispatchAddress,
      bondageAddress,
      registryAddress,
      oracleAddr,
      query,
      specifier,
      params,
      overrides || {}
    );
  }
  attach(address: string): PriceClient {
    return super.attach(address) as PriceClient;
  }
  connect(signer: Signer): PriceClient__factory {
    return super.connect(signer) as PriceClient__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceClient {
    return new Contract(address, _abi, signerOrProvider) as PriceClient;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "dispatchAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "bondageAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "registryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "oracleAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "query",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "specifier",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "params",
        type: "bytes32[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "query",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "MadeQuery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "response1",
        type: "string",
      },
    ],
    name: "Result1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "response1",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "response2",
        type: "string",
      },
    ],
    name: "Result2",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "response3",
        type: "int256[]",
      },
    ],
    name: "Result3",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "response1",
        type: "bytes32",
      },
    ],
    name: "Result32",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DataQuery",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "int256[]",
        name: "response",
        type: "int256[]",
      },
    ],
    name: "callback",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "cancelQuery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "delegateBond",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "initPriceQuery",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "latestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "priceQueryIDs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "priceResults",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "priceTimeStamps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queryBytes32IDs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queryBytes32Results",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queryIDs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queryIntIDs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queryParams",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queryResults",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "querySpec",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "returnPriceQueries",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalBytes32Queries",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalIntQueries",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalQueries",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address payable",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "oracleAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "query",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "specifier",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "params",
        type: "bytes32[]",
      },
    ],
    name: "updateQuery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cfc38038062001cfc83398181016040526101008110156200003857600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805160405193929190846401000000008211156200008b57600080fd5b83820191506020820185811115620000a257600080fd5b8251866001820283011164010000000082111715620000c057600080fd5b8083526020830192505050908051906020019080838360005b83811015620000f6578082015181840152602081019050620000d9565b50505050905090810190601f168015620001245780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190805160405193929190846401000000008211156200015257600080fd5b838201915060208201858111156200016957600080fd5b82518660208202830111640100000000821117156200018757600080fd5b8083526020830192505050908051906020019060200280838360005b83811015620001c0578082015181840152602081019050620001a3565b50505050905001604052505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084601360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600a90805190602001906200036a92919062000399565b5081600b8190555080600c90805190602001906200038a92919062000420565b505050505050505050620004c2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003dc57805160ff19168380011785556200040d565b828001600101855582156200040d579182015b828111156200040c578251825591602001919060010190620003ef565b5b5090506200041c919062000472565b5090565b8280548282559060005260206000209081019282156200045f579160200282015b828111156200045e57825182559160200191906001019062000441565b5b5090506200046e91906200049a565b5090565b6200049791905b808211156200049357600081600090555060010162000479565b5090565b90565b620004bf91905b80821115620004bb576000816000905550600101620004a1565b5090565b90565b61182a80620004d26000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806385ba7fc3116100de578063d5ba3d0d11610097578063ed24d5c511610071578063ed24d5c514610915578063f2fde38b14610933578063f4e0f02b14610977578063fc79e99d1461098157610173565b8063d5ba3d0d146107a2578063e1f53f16146107e4578063e7cc098f146108d357610173565b806385ba7fc31461062357806388bd657514610641578063893d20e81461065f5780638da5cb5b146106a957806399ff48af146106f3578063a3e6ba941461077657610173565b80635eb49132116101305780635eb491321461045857806370acb749146104a45780637237dc0b146104c257806376c7bb1d146104f05780637dc0d1d01461053257806384593baa1461057c57610173565b80633236f8b114610178578063383b9f63146101ba578063490494241461033357806355ad3e74146103b657806357e4933e146103f85780635d91521e14610416575b600080fd5b6101a46004803603602081101561018e57600080fd5b81019080803590602001909291905050506109c3565b6040518082815260200191505060405180910390f35b610331600480360360808110156101d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561020d57600080fd5b82018360208201111561021f57600080fd5b8035906020019184600183028401116401000000008311171561024157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001906401000000008111156102ae57600080fd5b8201836020820111156102c057600080fd5b803590602001918460208302840111640100000000831117156102e257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506109db565b005b61033b610ab0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561037b578082015181840152602081019050610360565b50505050905090810190601f1680156103a85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103e2600480360360208110156103cc57600080fd5b8101908080359060200190929190505050610b4e565b6040518082815260200191505060405180910390f35b610400610b6f565b6040518082815260200191505060405180910390f35b6104426004803603602081101561042c57600080fd5b8101908080359060200190929190505050610b75565b6040518082815260200191505060405180910390f35b61048e6004803603604081101561046e57600080fd5b810190808035906020019092919080359060200190929190505050610b8d565b6040518082815260200191505060405180910390f35b6104ac610bbb565b6040518082815260200191505060405180910390f35b6104ee600480360360208110156104d857600080fd5b8101908080359060200190929190505050610bc1565b005b61051c6004803603602081101561050657600080fd5b8101908080359060200190929190505050610caa565b6040518082815260200191505060405180910390f35b61053a610ccb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105a86004803603602081101561059257600080fd5b8101908080359060200190929190505050610cf1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105e85780820151818401526020810190506105cd565b50505050905090810190601f1680156106155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61062b610da1565b6040518082815260200191505060405180910390f35b610649610da7565b6040518082815260200191505060405180910390f35b610667610dad565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106b1610dd6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107746004803603604081101561070957600080fd5b81019080803590602001909291908035906020019064010000000081111561073057600080fd5b82018360208201111561074257600080fd5b8035906020019184602083028401116401000000008311171561076457600080fd5b9091929391929390505050610dfb565b005b61077e611019565b60405180848152602001838152602001828152602001935050505060405180910390f35b6107ce600480360360208110156107b857600080fd5b8101908080359060200190929190505050611080565b6040518082815260200191505060405180910390f35b6107ec6110a1565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561083757808201518184015260208101905061081c565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561087957808201518184015260208101905061085e565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156108bb5780820151818401526020810190506108a0565b50505050905001965050505050505060405180910390f35b6108ff600480360360208110156108e957600080fd5b81019080803590602001909291905050506111ad565b6040518082815260200191505060405180910390f35b61091d6111c5565b6040518082815260200191505060405180910390f35b6109756004803603602081101561094957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114c3565b005b61097f611614565b005b6109ad6004803603602081101561099757600080fd5b810190808035906020019092919050505061166f565b6040518082815260200191505060405180910390f35b60086020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a3457600080fd5b83600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600a9080519060200190610a8b929190611690565b5081600b8190555080600c9080519060200190610aa9929190611710565b5050505050565b600a8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b505050505081565b60048181548110610b5b57fe5b906000526020600020016000915090505481565b600f5481565b60076020528060005260406000206000915090505481565b60026020528160005260406000208181548110610ba657fe5b90600052602060002001600091509150505481565b600e5481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c1a57600080fd5b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637237dc0b826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610c8f57600080fd5b505af1158015610ca3573d6000803e3d6000fd5b5050505050565b600c8181548110610cb757fe5b906000526020600020016000915090505481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d995780601f10610d6e57610100808354040283529160200191610d99565b820191906000526020600020905b815481529060010190602001808311610d7c57829003601f168201915b505050505081565b600d5481565b600b5481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117a86021913960400191505060405180910390fd5b60018282905014610efd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806117c9602d913960400191505060405180910390fd5b7ff19b1dfbe49623242da1b9f78d3d9d132ee8a19ca13a4e7de836c781a49b402d83838360405180848152602001806020018281038252848482818152602001925060200280828437600081840152601f19601f82011690508083019250505094505050505060405180910390a1600382826000818110610f7a57fe5b90506020020135908060018154018082558091505090600182039060005260206000200160009091929091909150555060044290806001815401808255809150509060018203906000526020600020016000909192909190915055506005839080600181540180825580915050906001820390600052602060002001600090919290919091505550600e60008154809291906001019190505550505050565b600080600060036001600e54038154811061103057fe5b906000526020600020015460046001600e54038154811061104d57fe5b906000526020600020015460056001600e54038154811061106a57fe5b9060005260206000200154925092509250909192565b6003818154811061108d57fe5b906000526020600020016000915090505481565b6060806060600360046005828054806020026020016040519081016040528092919081815260200182805480156110f757602002820191906000526020600020905b8154815260200190600101908083116110e3575b505050505092508180548060200260200160405190810160405280929190818152602001828054801561114957602002820191906000526020600020905b815481526020019060010190808311611135575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561119b57602002820191906000526020600020905b815481526020019060010190808311611187575b50505050509050925092509250909192565b60066020528060005260406000206000915090505481565b600080601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637de7cc66600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600a600b54600c6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001848152602001806020018381038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156113045780601f106112d957610100808354040283529160200191611304565b820191906000526020600020905b8154815290600101906020018083116112e757829003601f168201915b5050838103825284818154815260200191508054801561134357602002820191906000526020600020905b81548152602001906001019080831161132f575b50509650505050505050602060405180830381600087803b15801561136757600080fd5b505af115801561137b573d6000803e3d6000fd5b505050506040513d602081101561139157600080fd5b810190808051906020019092919050505090507f50b551167947510d4c64636aac23b675db7849e6e7c824e4cf5830c3400e98a0600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600a83604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156114ac5780601f10611481576101008083540402835291602001916114ac565b820191906000526020600020905b81548152906001019060200180831161148f57829003601f168201915b505094505050505060405180910390a18091505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461151c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561155657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461166d57600080fd5b565b6005818154811061167c57fe5b906000526020600020016000915090505481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106116d157805160ff19168380011785556116ff565b828001600101855582156116ff579182015b828111156116fe5782518255916020019190600101906116e3565b5b50905061170c919061175d565b5090565b82805482825590600052602060002090810192821561174c579160200282015b8281111561174b578251825591602001919060010190611730565b5b5090506117599190611782565b5090565b61177f91905b8082111561177b576000816000905550600101611763565b5090565b90565b6117a491905b808211156117a0576000816000905550600101611788565b5090565b9056fe63616c6c6572206d75737420746865206469737061746368206164647265737320696e74207265736f6f6e7365206d7573742068617665206c656e677468206f66203120666f7220707269636573a265627a7a723158205bd337b23d2df634f5e7a9bc0ee2bebc283561ddd8783137960df91bec1e1b9464736f6c63430005100032";
