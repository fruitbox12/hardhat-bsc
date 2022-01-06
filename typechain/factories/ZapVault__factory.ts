/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ZapVault } from "../ZapVault";

export class ZapVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZapVault> {
    return super.deploy(overrides || {}) as Promise<ZapVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZapVault {
    return super.attach(address) as ZapVault;
  }
  connect(signer: Signer): ZapVault__factory {
    return super.connect(signer) as ZapVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZapVault {
    return new Contract(address, _abi, signerOrProvider) as ZapVault;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "appointedOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferInitiated",
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
    inputs: [],
    name: "appointedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimTransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "initTransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "initializeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revokeTransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ba9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636cd550cd116100665780636cd550cd146100fb578063785d4d12146101035780638129fc1c14610116578063893d20e81461011e578063ccb6a2701461013557600080fd5b80630bf6cc08146100985780632e1a7d4d146100b35780632e4df342146100c8578063426d7db6146100d0575b600080fd5b6100a0610148565b6040519081526020015b60405180910390f35b6100c66100c1366004610a12565b6101c9565b005b6100c66102f5565b6001546100e3906001600160a01b031681565b6040516001600160a01b0390911681526020016100aa565b6100c6610459565b6100c66101113660046109d6565b61049b565b6100c661058a565b6000546201000090046001600160a01b03166100e3565b6100c66101433660046109d6565b61060e565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561018c57600080fd5b505afa1580156101a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c49190610a2a565b905090565b6000546201000090046001600160a01b031633146102025760405162461bcd60e51b81526004016101f990610a91565b60405180910390fd5b6002546040516370a0823160e01b815230600482015282916001600160a01b0316906370a082319060240160206040518083038186803b15801561024557600080fd5b505afa158015610259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027d9190610a2a565b10156102db5760405162461bcd60e51b815260206004820152602760248201527f5661756c743a20576974686472617720616d6f756e7420697320696e7375666660448201526634b1b4b2b73a1760c91b60648201526084016101f9565b6002546102f2906001600160a01b03163383610733565b50565b6001546001600160a01b03166103685760405162461bcd60e51b815260206004820152603260248201527f4f776e61626c653a204e6f206f776e657273686970207472616e736665722068604482015271185d99481899595b881a5b9a5d1a585d195960721b60648201526084016101f9565b6001546001600160a01b031633146103e85760405162461bcd60e51b815260206004820152603b60248201527f4f776e61626c653a2043616c6c6572206973206e6f7420746865206170706f6960448201527f6e746564206f776e6572206f66207468697320636f6e7472616374000000000060648201526084016101f9565b600080546040513392620100009092046001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600180546000805462010000600160b01b0319166001600160a01b03831662010000021790556001600160a01b0319169055565b6000546201000090046001600160a01b031633146104895760405162461bcd60e51b81526004016101f990610a91565b600180546001600160a01b0319169055565b6000546201000090046001600160a01b031633146104cb5760405162461bcd60e51b81526004016101f990610a91565b6001600160a01b0381166105325760405162461bcd60e51b815260206004820152602860248201527f4f776e61626c653a2043616e6e6f74207472616e7366657220746f207a65726f604482015267206164647265737360c01b60648201526084016101f9565b6040516001600160a01b0382169033907fb150023a879fd806e3599b6ca8ee3b60f0e360ab3846d128d67ebce1a391639a90600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16806105a3575060005460ff16155b6105bf5760405162461bcd60e51b81526004016101f990610ae0565b600054610100900460ff161580156105e1576000805461ffff19166101011790555b6000805462010000600160b01b03191633620100000217905580156102f2576000805461ff001916905550565b600054610100900460ff1680610627575060005460ff16155b6106435760405162461bcd60e51b81526004016101f990610ae0565b600054610100900460ff16158015610665576000805461ffff19166101011790555b600154600160a01b900460ff16156106d45760405162461bcd60e51b815260206004820152602c60248201527f5661756c743a20496e7374616e63652068617320616c7265616479206265656e60448201526b081a5b9a5d1a585b1a5e995960a21b60648201526084016101f9565b6000805462010000600160b01b03191633620100000217905560018054600160a01b60ff60a01b19909116179055600280546001600160a01b0319166001600160a01b038416179055801561072f576000805461ff00191690555b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261078590849061078a565b505050565b60006107df826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661085c9092919063ffffffff16565b80519091501561078557808060200190518101906107fd91906109f2565b6107855760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101f9565b606061086b8484600085610875565b90505b9392505050565b6060824710156108d65760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101f9565b843b6109245760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101f9565b600080866001600160a01b031685876040516109409190610a42565b60006040518083038185875af1925050503d806000811461097d576040519150601f19603f3d011682016040523d82523d6000602084013e610982565b606091505b509150915061099282828661099d565b979650505050505050565b606083156109ac57508161086e565b8251156109bc5782518084602001fd5b8160405162461bcd60e51b81526004016101f99190610a5e565b6000602082840312156109e7578081fd5b813561086e81610b5e565b600060208284031215610a03578081fd5b8151801515811461086e578182fd5b600060208284031215610a23578081fd5b5035919050565b600060208284031215610a3b578081fd5b5051919050565b60008251610a54818460208701610b2e565b9190910192915050565b6020815260008251806020840152610a7d816040850160208701610b2e565b601f01601f19169190910160400192915050565b6020808252602f908201527f4f776e61626c653a204f6e6c79206f776e65722068617320616363657373207460408201526e37903a3434b990333ab731ba34b7b760891b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60005b83811015610b49578181015183820152602001610b31565b83811115610b58576000848401525b50505050565b6001600160a01b03811681146102f257600080fdfea26469706673582212203598831f5b2b078d30d07dca75ac5be8660a64406e8d6615cad970a2d244ceb864736f6c63430008040033";
