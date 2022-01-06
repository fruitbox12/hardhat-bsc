/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MediaFactoryOld } from "../MediaFactoryOld";

export class MediaFactoryOld__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MediaFactoryOld> {
    return super.deploy(overrides || {}) as Promise<MediaFactoryOld>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MediaFactoryOld {
    return super.attach(address) as MediaFactoryOld;
  }
  connect(signer: Signer): MediaFactoryOld__factory {
    return super.connect(signer) as MediaFactoryOld__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MediaFactoryOld {
    return new Contract(address, _abi, signerOrProvider) as MediaFactoryOld;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "extToken",
        type: "address",
      },
    ],
    name: "ExternalTokenDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
    ],
    name: "MediaDeployed",
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
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "marketContractAddr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "permissive",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_collectionMetadata",
        type: "string",
      },
    ],
    name: "deployMedia",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_zapMarket",
        type: "address",
      },
      {
        internalType: "address",
        name: "zapMediaInterface",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newInterface",
        type: "address",
      },
    ],
    name: "upgradeMedia",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611cb3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631db9776a14610067578063485cc9551461007c578063715018a61461008f5780638da5cb5b14610097578063d7f904a4146100c0578063f2fde38b146100d3575b600080fd5b61007a610075366004610848565b6100e6565b005b61007a61008a366004610869565b6101dd565b61007a610316565b6033546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100a46100ce36600461089b565b61034c565b61007a6100e1366004610848565b610599565b6033546001600160a01b031633146101195760405162461bcd60e51b815260040161011090610a49565b60405180910390fd5b3361017b5760405162461bcd60e51b815260206004820152602c60248201527f546865207a65726f20616464726573732063616e206e6f74206d616b6520636f60448201526b6e74726163742063616c6c7360a01b6064820152608401610110565b606654604051631b2ce7f360e11b81526001600160a01b03838116600483015290911690633659cfe690602401600060405180830381600087803b1580156101c257600080fd5b505af11580156101d6573d6000803e3d6000fd5b5050505050565b600054610100900460ff16806101f6575060005460ff16155b6102125760405162461bcd60e51b8152600401610110906109fb565b600054610100900460ff16158015610234576000805461ffff19166101011790555b61023c610634565b606580546001600160a01b0319166001600160a01b0385161790556040518290610265906107cb565b6001600160a01b039091168152602001604051809103906000f080158015610291573d6000803e3d6000fd5b50606680546001600160a01b0319166001600160a01b0392909216918217905560405163f2fde38b60e01b815230600482015263f2fde38b90602401600060405180830381600087803b1580156102e757600080fd5b505af11580156102fb573d6000803e3d6000fd5b505050508015610311576000805461ff00191690555b505050565b6033546001600160a01b031633146103405760405162461bcd60e51b815260040161011090610a49565b61034a60006106af565b565b60008060405161035b906107d8565b604051809103906000f080158015610377573d6000803e3d6000fd5b5060665460405163011838c360e21b81529192506001600160a01b0380841692630460e30c926103bd92169033908f908f908f908f908f908f908f908f90600401610986565b600060405180830381600087803b1580156103d757600080fd5b505af11580156103eb573d6000803e3d6000fd5b50506065546040516328f29a2560e01b81526001600160a01b03808616600483015285945090911691506328f29a2590602401600060405180830381600087803b15801561043857600080fd5b505af115801561044c573d6000803e3d6000fd5b5050505060008b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060008a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060208381015190820151606554604051626ca26b60e01b81523360048201526001600160a01b038881166024830152604482018590526064820184905294955092939192911690626ca26b90608401600060405180830381600087803b15801561053a57600080fd5b505af115801561054e573d6000803e3d6000fd5b50506040516001600160a01b03881692507fe4a881f0c02d889ad207adf5c28b33a60537c4485de8183463868e4ce4ec89cd9150600090a250929d9c50505050505050505050505050565b6033546001600160a01b031633146105c35760405162461bcd60e51b815260040161011090610a49565b6001600160a01b0381166106285760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610110565b610631816106af565b50565b600054610100900460ff168061064d575060005460ff16155b6106695760405162461bcd60e51b8152600401610110906109fb565b600054610100900460ff1615801561068b576000805461ffff19166101011790555b610693610701565b61069b61076b565b8015610631576000805461ff001916905550565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff168061071a575060005460ff16155b6107365760405162461bcd60e51b8152600401610110906109fb565b600054610100900460ff1615801561069b576000805461ffff19166101011790558015610631576000805461ff001916905550565b600054610100900460ff1680610784575060005460ff16155b6107a05760405162461bcd60e51b8152600401610110906109fb565b600054610100900460ff161580156107c2576000805461ffff19166101011790555b61069b336106af565b61050a80610a7f83390190565b610cf580610f8983390190565b80356001600160a01b03811681146107fc57600080fd5b919050565b60008083601f840112610812578182fd5b50813567ffffffffffffffff811115610829578182fd5b60208301915083602082850101111561084157600080fd5b9250929050565b600060208284031215610859578081fd5b610862826107e5565b9392505050565b6000806040838503121561087b578081fd5b610884836107e5565b9150610892602084016107e5565b90509250929050565b60008060008060008060008060a0898b0312156108b6578384fd5b883567ffffffffffffffff808211156108cd578586fd5b6108d98c838d01610801565b909a50985060208b01359150808211156108f1578586fd5b6108fd8c838d01610801565b909850965086915061091160408c016107e5565b955060608b013591508115158214610927578485fd5b90935060808a0135908082111561093c578384fd5b506109498b828c01610801565b999c989b5096995094979396929594505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600060018060a01b03808d168352808c16602084015260e060408401526109b160e084018b8d61095d565b83810360608501526109c4818a8c61095d565b9050818816608085015286151560a085015283810360c08501526109e981868861095d565b9e9d5050505050505050505050505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe608060405234801561001057600080fd5b5060405161050a38038061050a83398101604081905261002f91610148565b61003833610047565b61004181610097565b50610176565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100aa8161014260201b61020a1760201c565b6101205760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b600060208284031215610159578081fd5b81516001600160a01b038116811461016f578182fd5b9392505050565b610385806101856000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461009a5780638da5cb5b146100a2578063f2fde38b146100b3575b600080fd5b61006f61006a3660046102ec565b6100c6565b005b6001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61006f610139565b6000546001600160a01b031661007e565b61006f6100c13660046102ec565b61016f565b6000546001600160a01b031633146100f95760405162461bcd60e51b81526004016100f09061031a565b60405180910390fd5b61010281610210565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6000546001600160a01b031633146101635760405162461bcd60e51b81526004016100f09061031a565b61016d600061029c565b565b6000546001600160a01b031633146101995760405162461bcd60e51b81526004016100f09061031a565b6001600160a01b0381166101fe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100f0565b6102078161029c565b50565b3b151590565b803b61027a5760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b60648201526084016100f0565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156102fd578081fd5b81356001600160a01b0381168114610313578182fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220e129845160343c0c672897582c1ba333a2bf814c9f176f8204918a71292e52a464736f6c63430008040033608060405234801561001057600080fd5b50610cd5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630460e30c146100e3578063867287ed146100f65780638f28397014610125575b610049610138565b6001600160a01b0316336001600160a01b0316146100e1576100e161006c61016b565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100a457600080fd5b505afa1580156100b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100dc9190610a1a565b610193565b005b6100e16100f1366004610a36565b6101bc565b6101096101043660046109fe565b6103b3565b6040516001600160a01b03909116815260200160405180910390f35b6100e16101333660046109fe565b6104fa565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b60007fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5061015c565b3660008037600080366000845af43d6000803e8080156101b2573d6000f35b3d6000fd5b505050565b6102108a89898989898989896040516024016101df989796959493929190610b5d565b60408051601f198184030181529190526020810180516001600160e01b03166366aa0e1360e01b179052600061053e565b6102193361060d565b6000808b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025557600080fd5b505afa158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d9190610a1a565b6040516001600160a01b038d81166024830152919091169060440160408051601f198184030181529181526020820180516001600160e01b0316633c2ea68960e11b179052516102dd9190610b41565b600060405180830381855af49150503d8060008114610318576040519150601f19603f3d011682016040523d82523d6000602084013e61031d565b606091505b509150915081801561032e57508051155b6103a55760405162461bcd60e51b815260206004820152603c60248201527f4372656174696e67205a61704d656469612070726f78793a2043616e206e6f7460448201527f207472616e73666572206f776e657273686970206f662070726f78790000000060648201526084015b60405180910390fd5b505050505050505050505050565b60006103bd610138565b6001600160a01b0316336001600160a01b0316146103ed5760405162461bcd60e51b815260040161039c90610bf2565b60408051600481526024810182526020810180516001600160e01b0316631127a41d60e31b179052905160009182916001600160a01b0386169161043091610b41565b600060405180830381855af49150503d806000811461046b576040519150601f19603f3d011682016040523d82523d6000602084013e610470565b606091505b5091509150818015610483575060008151115b6104de5760405162461bcd60e51b815260206004820152602660248201527f43616e206e6f742067657420746865206f776e6572206f662074686973205a61604482015265704d6564696160d01b606482015260840161039c565b808060200190518101906104f29190610a1a565b949350505050565b610502610138565b6001600160a01b0316336001600160a01b0316146105325760405162461bcd60e51b815260040161039c90610bf2565b61053b8161060d565b50565b61054783610661565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806105885750805b156101b757610607836001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105c957600080fd5b505afa1580156105dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106019190610a1a565b836107e0565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610636610138565b604080516001600160a01b03928316815291841660208301520160405180910390a161053b816108cb565b803b6106bd5760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b606482015260840161039c565b610737816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106f957600080fd5b505afa15801561070d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107319190610a1a565b3b151590565b61079c5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b606482015260840161039c565b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060823b61083f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161039c565b600080846001600160a01b03168460405161085a9190610b41565b600060405180830381855af49150503d8060008114610895576040519150601f19603f3d011682016040523d82523d6000602084013e61089a565b606091505b50915091506108c28282604051806060016040528060278152602001610c7960279139610957565b95945050505050565b6001600160a01b0381166109305760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b606482015260840161039c565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036107bf565b60608315610966575081610990565b8251156109765782518084602001fd5b8160405162461bcd60e51b815260040161039c9190610bbf565b9392505050565b80356109a281610c63565b919050565b803580151581146109a257600080fd5b60008083601f8401126109c8578182fd5b50813567ffffffffffffffff8111156109df578182fd5b6020830191508360208285010111156109f757600080fd5b9250929050565b600060208284031215610a0f578081fd5b813561099081610c63565b600060208284031215610a2b578081fd5b815161099081610c63565b60008060008060008060008060008060e08b8d031215610a54578586fd5b8a35610a5f81610c63565b995060208b0135610a6f81610c63565b985060408b013567ffffffffffffffff80821115610a8b578788fd5b610a978e838f016109b7565b909a50985060608d0135915080821115610aaf578788fd5b610abb8e838f016109b7565b9098509650869150610acf60808e01610997565b9550610add60a08e016109a7565b945060c08d0135915080821115610af2578384fd5b50610aff8d828e016109b7565b915080935050809150509295989b9194979a5092959850565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008251610b53818460208701610c37565b9190910192915050565b60a081526000610b7160a083018a8c610b18565b8281036020840152610b8481898b610b18565b6001600160a01b0388166040850152861515606085015283810360808501529050610bb0818587610b18565b9b9a5050505050505050505050565b6020815260008251806020840152610bde816040850160208701610c37565b601f01601f19169190910160400192915050565b60208082526025908201527f4f6e6c79207468652041646d696e2063616e2063616c6c20746869732066756e60408201526431ba34b7b760d91b606082015260800190565b60005b83811015610c52578181015183820152602001610c3a565b838111156106075750506000910152565b6001600160a01b038116811461053b57600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e713cd1a5f67a9c54a8bc4ba5a4fa0f2a1f53f82239822d5abb8fd09a9d8ef1b64736f6c63430008040033a2646970667358221220ccbea93f241028b47efb489265f1481decd5756da7165f0e192eecee6c716d2764736f6c63430008040033";
