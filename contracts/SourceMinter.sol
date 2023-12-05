// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC721Receiver } from "./interfaces/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { IERC20 } from "./interfaces/IERC20.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract SourceMinter is IERC721Receiver {
    address immutable i_router;

    struct NFTBridgeLocked {
        uint tokenId;
        uint originalGameId;
        uint destinationGameId;
        uint destinationChainSelector;
    }

    event NFTBridgeInitiated(address indexed user, address indexed nftAddr, uint indexed tokenId, uint originalGameId, uint256 destinationGameId, uint destinationChainSelector);
    event NFTBridgeUnLocked(address indexed user, address indexed nftAddr, uint indexed tokenId, uint256 originalGameId, uint256 destinationGameId);

    mapping(address => mapping(address => mapping(uint256 => NFTBridgeLocked))) public locked;

    constructor(address router) {
        i_router = router;
    }

    receive() external payable {}

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external override returns (bytes4) {
        // TODO - fix decode data send with calldata
        (uint originalGameId, uint destinationGameId, uint destinationChainSelector) = abi.decode(data, (uint,uint,uint));

        locked[from][msg.sender][tokenId] = NFTBridgeLocked({
            tokenId: tokenId,
            originalGameId: originalGameId,
            destinationGameId: destinationGameId,
            destinationChainSelector: destinationChainSelector
        });

        emit NFTBridgeInitiated(from, msg.sender, tokenId, originalGameId, destinationGameId, destinationChainSelector);

        return this.onERC721Received.selector;
    }

    function unlock(
        address receiver,
        address nft,
        uint tokenId,
        uint destinationChainSelector
    ) external {
        require(msg.sender == i_router);

        NFTBridgeLocked memory nftLocked = locked[receiver][nft][tokenId];

        if (nftLocked.destinationChainSelector == destinationChainSelector) {
            IERC721(nft).safeTransferFrom(address(this), receiver, tokenId);

            emit NFTBridgeUnLocked(receiver, nft, tokenId, nftLocked.originalGameId, nftLocked.destinationGameId);
        }
    }
}
