// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MumbaiERC1155NFT is ERC1155 {
    string public name = "Web3Basketball";
    uint256 public constant Ball = 0;
    uint256 public constant Shorts = 1;
    uint256 public constant PRICE = 0.01 ether;

    int256 public constant BallPrice = 64 ** 14;
    int256 public constant ShortsPrice = 58 ** 14;

    int256 public constant price = 120577422945;

    constructor() ERC1155("https://bafybeie2dsp3nlrnf4pnjbrjnqqujfxazxykegr6bhvit3jurbc5kwzpki.ipfs.nftstorage.link/{id}.json") {
    }

    function getBallPrice() public pure returns (int256) {
        return (BallPrice / price);
    }

    function getShortsPrice() public pure returns (int256) {
        return (ShortsPrice / price);
    }


    function mintBall() public payable{

        require(int(msg.value) >= getBallPrice(), "Not enough ether to purchase NFTs.");
        _mint(msg.sender, Ball, 1,"");
    }

    function mintShorts() public payable{
        require(int(msg.value) >= getShortsPrice(), "Not enough ether to purchase NFTs.");
        _mint(msg.sender, Shorts, 1, "");
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://bafybeie2dsp3nlrnf4pnjbrjnqqujfxazxykegr6bhvit3jurbc5kwzpki.ipfs.nftstorage.link/",
                Strings.toString(_tokenid),".json"
            )
        );
    }

}