async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const NFTcontract = await ethers.getContractFactory("MumbaiERC1155NFT");
  const nftcontract = await NFTcontract.deploy({
    gasPrice: ethers.BigNumber.from(2000000000),
  });

  await nftcontract.deployed();

  console.log(`deployed to ${nftcontract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
