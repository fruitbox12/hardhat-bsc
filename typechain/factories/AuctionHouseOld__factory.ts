/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { AuctionHouseOld } from "../AuctionHouseOld";

export class AuctionHouseOld__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AuctionHouseOld> {
    return super.deploy(overrides || {}) as Promise<AuctionHouseOld>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AuctionHouseOld {
    return super.attach(address) as AuctionHouseOld;
  }
  connect(signer: Signer): AuctionHouseOld__factory {
    return super.connect(signer) as AuctionHouseOld__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuctionHouseOld {
    return new Contract(address, _abi, signerOrProvider) as AuctionHouseOld;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "AuctionApprovalUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "firstBid",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "extended",
        type: "bool",
      },
    ],
    name: "AuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
    ],
    name: "AuctionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "curator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "curatorFeePercentage",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "auctionCurrency",
        type: "address",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "AuctionDurationExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "curator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "curatorFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "auctionCurrency",
        type: "address",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "AuctionReservePriceUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "mediaContract",
            type: "address",
          },
        ],
        internalType: "struct IAuctionHouse.TokenDetails",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "firstBidTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "curatorFeePercentage",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "curator",
        type: "address",
      },
      {
        internalType: "address",
        name: "auctionCurrency",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "curator",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "curatorFeePercentage",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "auctionCurrency",
        type: "address",
      },
    ],
    name: "createAuction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "mediaContract",
        type: "address",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hundredPercent",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketContract",
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
    name: "minBidIncrementPercentage",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "setAuctionReservePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "startAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeBuffer",
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
    inputs: [],
    name: "wethAddress",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506132e9806100206000396000f3fe6080604052600436106100ab5760003560e01c806396b5a7551161006457806396b5a755146103355780639d53185714610355578063b296024d14610375578063c2d3c07b1461038a578063cbf8455d1461039d578063ec91f2a4146103bd57600080fd5b8063485cc955146101465780634f0e0ef314610166578063571a26a0146101a35780636f8a41e1146102c057806375e9249f146102e05780638a9cb3611461030e57600080fd5b36610141576033546001600160a01b0316331461013f5760405162461bcd60e51b815260206004820152604160248201527f41756374696f6e486f7573654f6c643a2046616c6c6261636b2066756e63746960448201527f6f6e20726563656976652829202d2073656e646572206973206e6f74205745546064820152600960fb1b608482015260a4015b60405180910390fd5b005b600080fd5b34801561015257600080fd5b5061013f610161366004612e71565b6103d3565b34801561017257600080fd5b50603354610186906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101af57600080fd5b506102476101be366004612ec5565b60356020908152600091825260409182902082518084019093528054835260018101546001600160a01b039081169284019290925260028101546003820154600483015460058401546006850154600786015460088701546009880154600a9098015460ff9788169996989597949693959483169461010090930484169391821692821691168b565b604080518c51815260209c8d01516001600160a01b039081169d82019d909d529a1515908b015260608a0198909852608089019690965260a088019490945260c087019290925260ff1660e08601528516610100850152841661012084015283166101408301529091166101608201526101800161019a565b3480156102cc57600080fd5b5061013f6102db366004612fbc565b610479565b3480156102ec57600080fd5b506103006102fb366004612f19565b610603565b60405190815260200161019a565b34801561031a57600080fd5b50610323606481565b60405160ff909116815260200161019a565b34801561034157600080fd5b5061013f610350366004612ec5565b610ea9565b34801561036157600080fd5b5061013f610370366004612f98565b61102e565b34801561038157600080fd5b50610323600581565b61013f610398366004612fdd565b611126565b3480156103a957600080fd5b5061013f6103b8366004612ef5565b61180c565b3480156103c957600080fd5b5061030061038481565b600054610100900460ff16806103ec575060005460ff16155b6104085760405162461bcd60e51b8152600401610136906130de565b600054610100900460ff1615801561042a576000805461ffff19166101011790555b610432611cb5565b603380546001600160a01b038086166001600160a01b03199283161790925560348054928516929091169190911790558015610474576000805461ff00191690555b505050565b8161048381611d29565b61049f5760405162461bcd60e51b81526004016101369061312c565b6000838152603560205260409020600901546001600160a01b03163314806104e5575060008381526035602052604090206007015461010090046001600160a01b031633145b6105405760405162461bcd60e51b815260206004820152602660248201527f4d7573742062652061756374696f6e2063757261746f72206f7220746f6b656e6044820152651037bbb732b960d11b6064820152608401610136565b6000838152603560205260409020600501541561059f5760405162461bcd60e51b815260206004820152601b60248201527f41756374696f6e2068617320616c7265616479207374617274656400000000006044820152606401610136565b600083815260356020908152604091829020600681018590556001810154905492518581526001600160a01b03909116929186917f01e6a465ec1edd582d333147c7b7edf5998164f2cf2269dcb9c93d46c67bd317910160405180910390a4505050565b6000600260015414156106285760405162461bcd60e51b81526004016101369061315b565b600260015561038486101561069b5760405162461bcd60e51b815260206004820152603360248201527f596f75722061756374696f6e206e6565647320746f20676f206f6e20666f72206044820152726174206c65617374203135206d696e7574657360681b6064820152608401610136565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b038816906301ffc9a79060240160206040518083038186803b1580156106e157600080fd5b505afa1580156106f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107199190612ea9565b61077d5760405162461bcd60e51b815260206004820152602f60248201527f746f6b656e436f6e747261637420646f6573206e6f7420737570706f7274204560448201526e524337323120696e7465726661636560881b6064820152608401610136565b6034546040805163a1794bcd60e01b815290516001600160a01b03928316928a169163a1794bcd9160048083019260209291908290030181600087803b1580156107c657600080fd5b505af11580156107da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fe9190612e55565b6001600160a01b0316146108245760405162461bcd60e51b815260040161013690613088565b60345460405163c3c5a54760e01b81526001600160a01b0389811660048301529091169063c3c5a5479060240160206040518083038186803b15801561086957600080fd5b505afa15801561087d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a19190612ea9565b61090b5760405162461bcd60e51b815260206004820152603560248201527f4d6564696120636f6e7472616374206973206e6f742072656769737465726564604482015274207769746820746865206d61726b6574706c61636560581b6064820152608401610136565b606460ff8416106109715760405162461bcd60e51b815260206004820152602a60248201527f63757261746f7246656550657263656e74616765206d757374206265206c6573604482015269073207468616e203130360b41b6064820152608401610136565b6040516331a9108f60e11b8152600481018990526000906001600160a01b03891690636352211e9060240160206040518083038186803b1580156109b457600080fd5b505afa1580156109c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ec9190612e55565b60405163020604bf60e21b8152600481018b90529091506001600160a01b0389169063081812fc9060240160206040518083038186803b158015610a2f57600080fd5b505afa158015610a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a679190612e55565b6001600160a01b0316336001600160a01b03161480610a8e5750336001600160a01b038216145b610af05760405162461bcd60e51b815260206004820152602d60248201527f43616c6c6572206d75737420626520617070726f766564206f72206f776e657260448201526c08199bdc881d1bdad95b881a59609a1b6064820152608401610136565b6000610afb60375490565b9050610b0b603780546001019055565b610b158a8a611d4e565b604051806101600160405280603660008c6001600160a01b03166001600160a01b0316815260200190815260200160002060008d8152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681525050815260200160001515815260200160008152602001898152602001600081526020018881526020018660ff168152602001836001600160a01b0316815260200160006001600160a01b03168152602001876001600160a01b03168152602001856001600160a01b0316815250603560008381526020019081526020016000206000820151816000016000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060208201518160020160006101000a81548160ff02191690831515021790555060408201518160030155606082015181600401556080820151816005015560a0820151816006015560c08201518160070160006101000a81548160ff021916908360ff16021790555060e08201518160070160016101000a8154816001600160a01b0302191690836001600160a01b031602179055506101008201518160080160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506101208201518160090160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061014082015181600a0160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550905050886001600160a01b03166323b872dd83308d6040518463ffffffff1660e01b8152600401610daf93929190613031565b600060405180830381600087803b158015610dc957600080fd5b505af1158015610ddd573d6000803e3d6000fd5b5050604080518d8152602081018c90529081018a90526001600160a01b038581166060830152898116608083015260ff891660a083015287811660c08301528c1692508391507f38c0b9047bd28fac9f420b967f6caf4a6260ba09d18940a9a502578a480c09009060e00160405180910390a36000818152603560205260409020600901546001600160a01b03161580610e885750816001600160a01b0316866001600160a01b0316145b15610e9857610e98816001611eec565b600180559998505050505050505050565b60026001541415610ecc5760405162461bcd60e51b81526004016101369061315b565b600260015580610edb81611d29565b610ef75760405162461bcd60e51b81526004016101369061312c565b60008281526035602052604090206007015461010090046001600160a01b0316331480610f3d57506000828152603560205260409020600901546001600160a01b031633145b610fa25760405162461bcd60e51b815260206004820152603060248201527f43616e206f6e6c792062652063616c6c65642062792061756374696f6e20637260448201526f32b0ba37b91037b91031bab930ba37b960811b6064820152608401610136565b6000828152603560205260409020600801546001600160a01b03161561101d5760405162461bcd60e51b815260206004820152602a60248201527f596f752063616e27742063616e63656c20616e2061756374696f6e2074686174604482015269081a185cc81848189a5960b21b6064820152608401610136565b61102682611f61565b505060018055565b8161103881611d29565b6110545760405162461bcd60e51b81526004016101369061312c565b6000838152603560205260409020600901546001600160a01b031633146110bd5760405162461bcd60e51b815260206004820152601760248201527f4d7573742062652061756374696f6e2063757261746f720000000000000000006044820152606401610136565b6000838152603560205260409020600501541561111c5760405162461bcd60e51b815260206004820152601b60248201527f41756374696f6e2068617320616c7265616479207374617274656400000000006044820152606401610136565b6104748383611eec565b8261113081611d29565b61114c5760405162461bcd60e51b81526004016101369061312c565b6002600154141561116f5760405162461bcd60e51b81526004016101369061315b565b60026001819055600085815260356020526040902060088101549101546001600160a01b039091169060ff166111f35760405162461bcd60e51b815260206004820152602360248201527f41756374696f6e206d75737420626520617070726f76656420627920637572616044820152623a37b960e91b6064820152608401610136565b6000858152603560205260409020600501546112515760405162461bcd60e51b815260206004820152601a60248201527f41756374696f6e206861736e27742073746172746564207965740000000000006044820152606401610136565b60008581526035602052604090206004810154600590910154611273916120c2565b42106112b35760405162461bcd60e51b815260206004820152600f60248201526e105d58dd1a5bdb88195e1c1a5c9959608a1b6044820152606401610136565b6000858152603560205260409020600601548410156113145760405162461bcd60e51b815260206004820152601f60248201527f4d7573742073656e64206174206c6561737420726573657276655072696365006044820152606401610136565b60008581526035602052604090206003015461135a906113429060649061133c9060056120d5565b906120e1565b600087815260356020526040902060030154906120c2565b8410156113d1576040805162461bcd60e51b81526020600482015260248101919091527f4d7573742073656e64206d6f7265207468616e206c617374206269642062792060448201527f6d696e426964496e6372656d656e7450657263656e7461676520616d6f756e746064820152608401610136565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b038416906301ffc9a79060240160206040518083038186803b15801561141757600080fd5b505afa15801561142b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144f9190612ea9565b61149b5760405162461bcd60e51b815260206004820152601d60248201527f446f65736e277420737570706f7274204e465420696e746572666163650000006044820152606401610136565b6000858152603560205260409020600101546001600160a01b038481169116141561161757826001600160a01b031663a1794bcd6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156114fb57600080fd5b505af115801561150f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115339190612e55565b600086815260356020526040908190205490516347c327c360e11b81526001600160a01b038681166004830152602482019290925260448101879052911690638f864f869060640160206040518083038186803b15801561159357600080fd5b505afa1580156115a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cb9190612ea9565b6116175760405162461bcd60e51b815260206004820152601f60248201527f42696420696e76616c696420666f722073686172652073706c697474696e67006044820152606401610136565b6001600160a01b038116156116535760008581526035602052604090206003810154600a909101546116539183916001600160a01b03166120ed565b6000858152603560205260409020600a01546116799085906001600160a01b03166121fd565b6000858152603560205260408120600381018690556008810180546001600160a01b03191633179055600481015460059091015482916116c59142916116bf91906120c2565b906124e1565b9050610384811015611711576000878152603560205260409020600401546116f96116f2610384846124e1565b82906120c2565b60008981526035602052604090206004015550600191505b600087815260356020908152604091829020805460019091015483519182526001600160a01b039081169282019290925233818401526060810189905290851615608082015283151560a0820152905188917fda6b779568630ce5e5658b317174df474d5b335541ed9471bd8424a017f3be6d919081900360c00190a281156117ff57600087815260356020526040908190206001810154815460049092015492516001600160a01b03909116928a927f55cf2b31608fbe49fa31cd0285b6b6cce46f56d26c8c59980a2af5a0ffbdd5db926117f69290918252602082015260400190565b60405180910390a35b5050600180555050505050565b8161181681611d29565b6118325760405162461bcd60e51b81526004016101369061312c565b600260015414156118555760405162461bcd60e51b81526004016101369061315b565b60026001556000838152603560205260409020600501546118af5760405162461bcd60e51b815260206004820152601460248201527320bab1ba34b7b7103430b9b713ba103132b3bab760611b6044820152606401610136565b600083815260356020526040902060048101546005909101546118d1916120c2565b4210156119205760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206861736e277420636f6d706c6574656400000000000000006044820152606401610136565b6000838152603560205260408120600a01546001600160a01b031615611960576000848152603560205260409020600a01546001600160a01b031661196d565b6033546001600160a01b03165b6000858152603560205260408120600381015460019091015492935090916001600160a01b0386811691161415611a0c576000806119ab88886124ed565b93509150829050600182151514611a0557600088815260356020526040902060088101546003820154600a909201546119f2926001600160a01b03928316929091166120ed565b6119fb88611f61565b5050505050611cac565b5050611ace565b600086815260356020526040908190206001810154600882015491549251632142170760e11b81526001600160a01b03918216936342842e0e93611a5893309391169190600401613031565b600060405180830381600087803b158015611a7257600080fd5b505af1925050508015611a83575060015b611ace57600086815260356020526040902060088101546003820154600a90920154611abd926001600160a01b03928316929091166120ed565b611ac686611f61565b505050611cac565b6000868152603560205260409020600901546001600160a01b031615611b5557600086815260356020526040902060070154611b159060649061133c90849060ff166120d5565b9150611b2181836124e1565b60008781526035602052604090206009810154600a90910154919250611b55916001600160a01b03918216918591166120ed565b60008681526035602052604090206007810154600a90910154611b8b916001600160a01b036101009091048116918491166120ed565b600086815260356020908152604091829020600181015481546007830154600984015460089094015486519283526001600160a01b036101009092048216958301959095529283169481019490945291811660608401526080830184905260a0830185905285811660c0840152169087907f4f35fb3ea0081b3ccbe8df613cab0f9e1694d50a025e0aa09b88a86a3d07c2de9060e00160405180910390a350505060008381526035602052604081208181556001810180546001600160a01b031990811690915560028201805460ff1916905560038201839055600482018390556005820183905560068201929092556007810180546001600160a81b03191690556008810180548316905560098101805483169055600a01805490911690555b50506001805550565b600054610100900460ff1680611cce575060005460ff16155b611cea5760405162461bcd60e51b8152600401610136906130de565b600054610100900460ff16158015611d0c576000805461ffff19166101011790555b611d14612a9b565b8015611d26576000805461ff00191690555b50565b60009081526035602052604090206007015461010090046001600160a01b0316151590565b6001600160a01b038116611dd65760405162461bcd60e51b815260206004820152604360248201527f41756374696f6e486f7573654f6c643a204d6564696120436f6e74726163742060448201527f416464726573732063616e206e6f7420626520746865207a65726f206164647260648201526265737360e81b608482015260a401610136565b6001600160a01b0381811660009081526036602090815260408083208684529091529020600101541615611e94576001600160a01b03808216600081815260366020908152604080832087845290915290206001015490911614611e945760405162461bcd60e51b815260206004820152602f60248201527f546f6b656e20697320616c72656164792073657420666f72206120646966666560448201526e3932b73a1031b7b63632b1ba34b7b760891b6064820152608401610136565b6040805180820182528381526001600160a01b03928316602080830182815260009283526036825284832096835295905291909120905181559151600190920180546001600160a01b03191692909116919091179055565b60008281526035602090815260409182902060028101805460ff19168515159081179091554260058301556001820154915493519081526001600160a01b03909116929185917fec35d321ab4972475f131e184c0c0fe52c5a58a29d74f7db2969af2f6dd93a1f910160405180910390a45050565b600081815260356020526040908190206007810154600182015491549251632142170760e11b81526101009091046001600160a01b03908116939216916342842e0e91611fb5913091869190600401613031565b600060405180830381600087803b158015611fcf57600080fd5b505af1158015611fe3573d6000803e3d6000fd5b5050506000838152603560209081526040918290206001810154905492516001600160a01b038681168252909116935085917f6091afcbe8514686c43b167ca4f1b03e24446d29d8490d496e438f8a2c763439910160405180910390a45060009081526035602052604081208181556001810180546001600160a01b031990811690915560028201805460ff1916905560038201839055600482018390556005820183905560068201929092556007810180546001600160a81b03191690556008810180548316905560098101805483169055600a0180549091169055565b60006120ce82846131e0565b9392505050565b60006120ce8284613218565b60006120ce82846131f8565b6001600160a01b0381166121e957603354604051632e1a7d4d60e01b8152600481018490526001600160a01b0390911690632e1a7d4d90602401600060405180830381600087803b15801561214157600080fd5b505af1158015612155573d6000803e3d6000fd5b505050506121638383612b0a565b61047457603360009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156121b757600080fd5b505af11580156121cb573d6000803e3d6000fd5b505060335461047493506001600160a01b0316915085905084612b81565b6104746001600160a01b0382168484612b81565b6001600160a01b0381166122e2578134146122755760405162461bcd60e51b815260206004820152603260248201527f53656e74204554482056616c756520646f6573206e6f74206d617463682073706044820152711958da599a595908189a5908185b5bdd5b9d60721b6064820152608401610136565b603360009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156122c557600080fd5b505af11580156122d9573d6000803e3d6000fd5b50505050505050565b34156123565760405162461bcd60e51b815260206004820152603b60248201527f41756374696f6e486f7573654f6c643a204574686572206973206e6f7420726560448201527f71756972656420666f722074686973207472616e73616374696f6e00000000006064820152608401610136565b6040516370a0823160e01b815230600482015281906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561239a57600080fd5b505afa1580156123ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d29190612edd565b90506123e96001600160a01b038316333087612be4565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b15801561242b57600080fd5b505afa15801561243f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124639190612edd565b90508061247083876120c2565b146124da5760405162461bcd60e51b815260206004820152603460248201527f546f6b656e207472616e736665722063616c6c20646964206e6f74207472616e6044820152731cd9995c88195e1c1958dd195908185b5bdd5b9d60621b6064820152608401610136565b5050505050565b60006120ce8284613237565b600080603460009054906101000a90046001600160a01b03166001600160a01b0316836001600160a01b031663a1794bcd6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561254a57600080fd5b505af115801561255e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125829190612e55565b6001600160a01b0316146125a85760405162461bcd60e51b815260040161013690613088565b60345460405163c3c5a54760e01b81526001600160a01b0385811660048301529091169063c3c5a5479060240160206040518083038186803b1580156125ed57600080fd5b505afa158015612601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126259190612ea9565b6126905760405162461bcd60e51b815260206004820152603660248201527f54686973204d6564696120436f6e747261637420697320756e617574686f726960448201527573656420746f20736574746c652061756374696f6e7360501b6064820152608401610136565b6000848152603560205260408120600a01546001600160a01b0316156126d0576000858152603560205260409020600a01546001600160a01b03166126dd565b6033546001600160a01b03165b6040805160a081018252600088815260356020818152848320600381015485526001600160a01b0380881683870181905230878901528d865293835260089091015481166060860152855180830187528481526080860152855163a1794bcd60e01b815295519697509395919463095ea7b3948b169363a1794bcd93600480840194939192918390030190829087803b15801561277957600080fd5b505af115801561278d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127b19190612e55565b835160405160e084901b6001600160e01b03191681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b1580156127f957600080fd5b505af115801561280d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128319190612ea9565b5060008681526035602052604090819020549051632dfb121160e11b81526001600160a01b03871691635bf624229161286f91908590600401613192565b600060405180830381600087803b15801561288957600080fd5b505af115801561289d573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092506001600160a01b03851691506370a082319060240160206040518083038186803b1580156128e357600080fd5b505afa1580156128f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061291b9190612edd565b6000888152603560205260409081902054905163ba33939960e01b81529192506001600160a01b0388169163ba3393999161295a918690600401613192565b600060405180830381600087803b15801561297457600080fd5b505af1925050508015612985575060015b612a03576000878152603560205260409081902054905163b320f45960e01b815260048101919091526001600160a01b0387169063b320f45990602401600060405180830381600087803b1580156129dc57600080fd5b505af11580156129f0573d6000803e3d6000fd5b5050505060008094509450505050612a94565b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a082319060240160206040518083038186803b158015612a4557600080fd5b505afa158015612a59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7d9190612edd565b90506001612a8b82846124e1565b95509550505050505b9250929050565b600054610100900460ff1680612ab4575060005460ff16155b612ad05760405162461bcd60e51b8152600401610136906130de565b600054610100900460ff16158015612af2576000805461ffff19166101011790555b600180558015611d26576000805461ff001916905550565b60408051600080825260208201928390529182916001600160a01b038616918591612b3491613015565b60006040518083038185875af1925050503d8060008114612b71576040519150601f19603f3d011682016040523d82523d6000602084013e612b76565b606091505b509095945050505050565b6040516001600160a01b03831660248201526044810182905261047490849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612c0b565b612c05846323b872dd60e01b858585604051602401612bad93929190613031565b50505050565b6000612c60826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612cdd9092919063ffffffff16565b8051909150156104745780806020019051810190612c7e9190612ea9565b6104745760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610136565b6060612cec8484600085612cf4565b949350505050565b606082471015612d555760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610136565b843b612da35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610136565b600080866001600160a01b03168587604051612dbf9190613015565b60006040518083038185875af1925050503d8060008114612dfc576040519150601f19603f3d011682016040523d82523d6000602084013e612e01565b606091505b5091509150612e11828286612e1c565b979650505050505050565b60608315612e2b5750816120ce565b825115612e3b5782518084602001fd5b8160405162461bcd60e51b81526004016101369190613055565b600060208284031215612e66578081fd5b81516120ce81613290565b60008060408385031215612e83578081fd5b8235612e8e81613290565b91506020830135612e9e81613290565b809150509250929050565b600060208284031215612eba578081fd5b81516120ce816132a5565b600060208284031215612ed6578081fd5b5035919050565b600060208284031215612eee578081fd5b5051919050565b60008060408385031215612f07578182fd5b823591506020830135612e9e81613290565b600080600080600080600060e0888a031215612f33578283fd5b873596506020880135612f4581613290565b955060408801359450606088013593506080880135612f6381613290565b925060a088013560ff81168114612f78578283fd5b915060c0880135612f8881613290565b8091505092959891949750929550565b60008060408385031215612faa578182fd5b823591506020830135612e9e816132a5565b60008060408385031215612fce578182fd5b50508035926020909101359150565b600080600060608486031215612ff1578283fd5b8335925060208401359150604084013561300a81613290565b809150509250925092565b6000825161302781846020870161324e565b9190910192915050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b602081526000825180602084015261307481604085016020870161324e565b601f01601f19169190910160400192915050565b60208082526036908201527f54686973206d61726b657420636f6e7472616374206973206e6f742066726f6d604082015275205a61702773204e4654204d61726b6574506c61636560501b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b602080825260159082015274105d58dd1a5bdb88191bd95cdb89dd08195e1a5cdd605a1b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b91825280516020808401919091528101516001600160a01b0390811660408085019190915282015181166060808501919091528201511660808084019190915201515160a082015260c00190565b600082198211156131f3576131f361327a565b500190565b60008261321357634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156132325761323261327a565b500290565b6000828210156132495761324961327a565b500390565b60005b83811015613269578181015183820152602001613251565b83811115612c055750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114611d2657600080fd5b8015158114611d2657600080fdfea26469706673582212200b90b4c21b044d81d35fa89a574c253a43df33d26c58cbba02f66ec950eafd5464736f6c63430008040033";
