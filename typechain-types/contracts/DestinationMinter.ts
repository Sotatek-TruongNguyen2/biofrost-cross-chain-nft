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

export interface DestinationMinterInterface extends Interface {
  getFunction(
    nameOrSignature: "onERC721Received" | "receiveNFT"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "MintCallSuccessfull" | "NFTBridgeBackInitiated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNFT",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveNFT", data: BytesLike): Result;
}

export namespace MintCallSuccessfullEvent {
  export type InputTuple = [receiver: AddressLike, tokenId: BigNumberish];
  export type OutputTuple = [receiver: string, tokenId: bigint];
  export interface OutputObject {
    receiver: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NFTBridgeBackInitiatedEvent {
  export type InputTuple = [
    user: AddressLike,
    nftAddr: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [user: string, nftAddr: string, tokenId: bigint];
  export interface OutputObject {
    user: string;
    nftAddr: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DestinationMinter extends BaseContract {
  connect(runner?: ContractRunner | null): DestinationMinter;
  waitForDeployment(): Promise<this>;

  interface: DestinationMinterInterface;

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

  receiveNFT: TypedContractMethod<
    [receiver: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
    nameOrSignature: "receiveNFT"
  ): TypedContractMethod<
    [receiver: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "MintCallSuccessfull"
  ): TypedContractEvent<
    MintCallSuccessfullEvent.InputTuple,
    MintCallSuccessfullEvent.OutputTuple,
    MintCallSuccessfullEvent.OutputObject
  >;
  getEvent(
    key: "NFTBridgeBackInitiated"
  ): TypedContractEvent<
    NFTBridgeBackInitiatedEvent.InputTuple,
    NFTBridgeBackInitiatedEvent.OutputTuple,
    NFTBridgeBackInitiatedEvent.OutputObject
  >;

  filters: {
    "MintCallSuccessfull(address,uint256)": TypedContractEvent<
      MintCallSuccessfullEvent.InputTuple,
      MintCallSuccessfullEvent.OutputTuple,
      MintCallSuccessfullEvent.OutputObject
    >;
    MintCallSuccessfull: TypedContractEvent<
      MintCallSuccessfullEvent.InputTuple,
      MintCallSuccessfullEvent.OutputTuple,
      MintCallSuccessfullEvent.OutputObject
    >;

    "NFTBridgeBackInitiated(address,address,uint256)": TypedContractEvent<
      NFTBridgeBackInitiatedEvent.InputTuple,
      NFTBridgeBackInitiatedEvent.OutputTuple,
      NFTBridgeBackInitiatedEvent.OutputObject
    >;
    NFTBridgeBackInitiated: TypedContractEvent<
      NFTBridgeBackInitiatedEvent.InputTuple,
      NFTBridgeBackInitiatedEvent.OutputTuple,
      NFTBridgeBackInitiatedEvent.OutputObject
    >;
  };
}
