/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SourceMinterInterface extends Interface {
  getFunction(
    nameOrSignature: "locked" | "onERC721Received" | "unlock"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NFTBridgeInitiated" | "NFTBridgeUnLocked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "locked",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
}

export namespace NFTBridgeInitiatedEvent {
  export type InputTuple = [
    user: AddressLike,
    nftAddr: AddressLike,
    tokenId: BigNumberish,
    originalGameId: BigNumberish,
    destinationGameId: BigNumberish,
    destinationChainSelector: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    nftAddr: string,
    tokenId: bigint,
    originalGameId: bigint,
    destinationGameId: bigint,
    destinationChainSelector: bigint
  ];
  export interface OutputObject {
    user: string;
    nftAddr: string;
    tokenId: bigint;
    originalGameId: bigint;
    destinationGameId: bigint;
    destinationChainSelector: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NFTBridgeUnLockedEvent {
  export type InputTuple = [
    user: AddressLike,
    nftAddr: AddressLike,
    tokenId: BigNumberish,
    originalGameId: BigNumberish,
    destinationGameId: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    nftAddr: string,
    tokenId: bigint,
    originalGameId: bigint,
    destinationGameId: bigint
  ];
  export interface OutputObject {
    user: string;
    nftAddr: string;
    tokenId: bigint;
    originalGameId: bigint;
    destinationGameId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SourceMinter extends BaseContract {
  connect(runner?: ContractRunner | null): SourceMinter;
  waitForDeployment(): Promise<this>;

  interface: SourceMinterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  locked: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        tokenId: bigint;
        originalGameId: bigint;
        destinationGameId: bigint;
        destinationChainSelector: bigint;
      }
    ],
    "view"
  >;

  onERC721Received: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      tokenId: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  unlock: TypedContractMethod<
    [
      receiver: AddressLike,
      nft: AddressLike,
      tokenId: BigNumberish,
      destinationChainSelector: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "locked"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        tokenId: bigint;
        originalGameId: bigint;
        destinationGameId: bigint;
        destinationChainSelector: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      tokenId: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unlock"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      nft: AddressLike,
      tokenId: BigNumberish,
      destinationChainSelector: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "NFTBridgeInitiated"
  ): TypedContractEvent<
    NFTBridgeInitiatedEvent.InputTuple,
    NFTBridgeInitiatedEvent.OutputTuple,
    NFTBridgeInitiatedEvent.OutputObject
  >;
  getEvent(
    key: "NFTBridgeUnLocked"
  ): TypedContractEvent<
    NFTBridgeUnLockedEvent.InputTuple,
    NFTBridgeUnLockedEvent.OutputTuple,
    NFTBridgeUnLockedEvent.OutputObject
  >;

  filters: {
    "NFTBridgeInitiated(address,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      NFTBridgeInitiatedEvent.InputTuple,
      NFTBridgeInitiatedEvent.OutputTuple,
      NFTBridgeInitiatedEvent.OutputObject
    >;
    NFTBridgeInitiated: TypedContractEvent<
      NFTBridgeInitiatedEvent.InputTuple,
      NFTBridgeInitiatedEvent.OutputTuple,
      NFTBridgeInitiatedEvent.OutputObject
    >;

    "NFTBridgeUnLocked(address,address,uint256,uint256,uint256)": TypedContractEvent<
      NFTBridgeUnLockedEvent.InputTuple,
      NFTBridgeUnLockedEvent.OutputTuple,
      NFTBridgeUnLockedEvent.OutputObject
    >;
    NFTBridgeUnLocked: TypedContractEvent<
      NFTBridgeUnLockedEvent.InputTuple,
      NFTBridgeUnLockedEvent.OutputTuple,
      NFTBridgeUnLockedEvent.OutputObject
    >;
  };
}
