// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract MyERC1155NFT is ERC1155 {
    string public name = "Web3Basketball";
    uint256 public constant Ball = 0;
    uint256 public constant Shorts = 1;
    uint256 public constant PRICE = 0.01 ether;

    int256 public constant BallPrice = 64 ** 14;
    int256 public constant ShortsPrice = 58 ** 14;

    AggregatorV3Interface internal eth_usd_price_feed;

    constructor() ERC1155("https://bafybeie2dsp3nlrnf4pnjbrjnqqujfxazxykegr6bhvit3jurbc5kwzpki.ipfs.nftstorage.link/{id}.json") {
        eth_usd_price_feed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
    }

    function getEthUsd() public view returns (int256) {
         (
            , int price, , , 
        ) = eth_usd_price_feed.latestRoundData();
    
        return (price);
    }

    function mintBall() public payable{

        require(int(msg.value) >=  BallPrice / getEthUsd() , "Not enough ether to purchase NFTs.");
        _mint(msg.sender, Ball, 1,"");
    }

    function mintShorts() public payable{
        require(int(msg.value) >=  ShortsPrice / getEthUsd(), "Not enough ether to purchase NFTs.");
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