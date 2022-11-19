const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Should mint Item", async function () {
    const accounts = await ethers.getSigners();

    const NFTcontract = await ethers.getContractFactory("MumbaiERC1155NFT");
    const nftcontract = await NFTcontract.deploy();

    console.log(await nftcontract.getBallPrice());
    await nftcontract.mintBall({ value: ethers.utils.parseEther("0.1") });
    const balance = await nftcontract.balanceOf(accounts[0].address, 0);
    expect(1).to.equal(Number(balance.toString()));
  });
});
