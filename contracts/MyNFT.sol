// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MyNFT is ERC721, Ownable {
    using Strings for uint256;
    // Optional mapping for token URIs
    mapping (uint256 => string) private _tokenURIs;

    address public destinationMinter;

    string private _baseURIextended;
    constructor() ERC721("MyNFT", "MNFT") {
    }

    function setDestinationMinter(address _destinationMinter) public onlyOwner {
        destinationMinter = _destinationMinter;
    }

    function mint(address to, uint tokenId) public {
        require(msg.sender == destinationMinter);
        _safeMint(to, tokenId);
    }

    function burn(uint tokenId) public  {
        require(msg.sender == destinationMinter);
        _burn(tokenId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();
        
        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
        return string(abi.encodePacked(base, tokenId.toString()));
    }
}
