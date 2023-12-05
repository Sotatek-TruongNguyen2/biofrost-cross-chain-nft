// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {MyNFT} from "./MyNFT.sol";
import { IERC721Receiver } from "./interfaces/IERC721Receiver.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract DestinationMinter is IERC721Receiver {
    address immutable i_router;
    MyNFT nft;
    uint256 gameId;
    uint256 originalGameId;

    event MintCallSuccessfull(address indexed receiver, uint256 tokenId);
    event NFTBridgeBackInitiated(address indexed user, address indexed nftAddr, uint indexed tokenId);

    constructor(address router, MyNFT _nft, uint256 _gameId) {
        gameId = _gameId;
        i_router = router;
        nft = _nft;
    }

    function receiveNFT(
        address receiver,
        uint tokenId
    ) external {
        require(msg.sender == i_router);
        nft.mint(receiver, tokenId);
        emit MintCallSuccessfull(receiver, tokenId);
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external override returns (bytes4) {
        require(msg.sender == address(nft));

        emit NFTBridgeBackInitiated(from, msg.sender, tokenId);
 
        return this.onERC721Received.selector;
    }
}
