const MyERC1155NFT = require("./MyERC1155NFT.json");
const MumbaiERC1155NFT = require("./MumbaiERC1155NFT.json");

export function getContractInfo(chain) {
  if (chain === 80001)
    return {
      contractAddress: "0xb8996c81D858C45Fb87348bdA7B737FcEd07379A",
      abi: MumbaiERC1155NFT.abi,
    };

  if (chain === 314)
    return {
      contractAddress: "0x28dd5a661710f21892BC54A05b43918ef7e1CB4B",
      abi: MumbaiERC1155NFT.abi,
    };

  return {
    contractAddress: "0x6376Cec7b172770BE11F98E4e7E3c409f7cDBd76",
    abi: MyERC1155NFT.abi,
  };
}
