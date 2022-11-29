import dotenv from "dotenv";
dotenv.config();

import {
  AptosClient,
  AptosAccount,
  FaucetClient,
  TokenClient,
  CoinClient,
  HexString,
} from "aptos";

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";

const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

const tokenClient = new TokenClient(client);

// Create a coin client for checking account balances.
const coinClient = new CoinClient(client);

// Create accounts.
const privateKeyBytes = HexString.ensure(process.env.PK).toUint8Array();
const alice = new AptosAccount(privateKeyBytes);

// Print out account addresses.
console.log("=== Addresses ===");
console.log(`Alice: ${alice.address()}`);
console.log("");

await faucetClient.fundAccount(alice.address(), 100_000_000);

console.log("=== Initial Coin Balances ===");
console.log(`Alice: ${await coinClient.checkBalance(alice)}`);
console.log("");

console.log("=== Creating Collection and Token ===");

const collectionName = "Web3Basketball";
const tokenName = "Ball";
const tokenPropertyVersion = 0;
const description =
  "Web3Basketball Dapp introduces users to the sport of Basketball";

const URI =
  "https://bafybeie2dsp3nlrnf4pnjbrjnqqujfxazxykegr6bhvit3jurbc5kwzpki.ipfs.nftstorage.link/";

const txnHash1 = await tokenClient.createCollection(
  alice,
  collectionName,
  description,
  URI
);
await client.waitForTransaction(txnHash1, { checkSuccess: true });

const txnHash2 = await tokenClient.createToken(
  alice,
  collectionName,
  tokenName,
  "simple token",
  1000,
  "https://bafybeie2dsp3nlrnf4pnjbrjnqqujfxazxykegr6bhvit3jurbc5kwzpki.ipfs.nftstorage.link/0.json"
);

await client.waitForTransaction(txnHash2, { checkSuccess: true });

const txnHash3 = await tokenClient.createToken(
  alice,
  collectionName,
  "Shorts",
  "simple token",
  1000,
  "https://bafybeie2dsp3nlrnf4pnjbrjnqqujfxazxykegr6bhvit3jurbc5kwzpki.ipfs.nftstorage.link/1.json"
);

await client.waitForTransaction(txnHash3, { checkSuccess: true });

const collectionData = await tokenClient.getCollectionData(
  alice.address(),
  collectionName
);
console.log(`Alice's collection: ${JSON.stringify(collectionData, null, 4)}`);

// Get the token balance.
const aliceBalance1 = await tokenClient.getToken(
  alice.address(),
  collectionName,
  tokenName,
  `${tokenPropertyVersion}`
);
console.log(`Alice's token balance: ${aliceBalance1["amount"]}`);

// Get the token data.
const tokenData = await tokenClient.getTokenData(
  alice.address(),
  collectionName,
  tokenName
);
console.log(`Alice's token data: ${JSON.stringify(tokenData, null, 4)}`);
