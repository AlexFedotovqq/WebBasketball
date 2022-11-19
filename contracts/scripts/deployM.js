async function main() {
  const NFTcontract = await ethers.getContractFactory("MumbaiERC1155NFT");
  const nftcontract = await NFTcontract.deploy();

  await nftcontract.deployed();

  console.log(`deployed to ${nftcontract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
