<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/api/">Blockchain API reference</a> •
  <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a>
</p>

# NFT Minter Tutorial

This project contains all of the tutorial files from [The ultimate guide to NFTs: From concept to market success](https://chainstack.com/ultimate-guide-to-nfts/) published on the Chainstack blog.

## Project details

This repository contains scripts and contracts needed to create a new wallet, check its balance, compile an NFT contract, and mint NFTs using custom metadata on the Ethereum network.

Find the full tutorial article available on the Chainstack blog:
* [The ultimate guide to NFTs: From concept to market success](https://chainstack.com/ultimate-guide-to-nfts/)

## Quick start

Clone this repository.

### Install dependencies

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.

### Edit .env.sample

Edit the `.env.sample` file, fill up the fields, and rename it to `.env`.

```env
ENDPOINT_URL = "https://YOUR_CHAINSTACK_ENDPOINT_HERE" 
PUBLIC_KEY = "0x_YOUR_WALLET_ADDRESS" 
PRIVATE_KEY = "YOUR_PRIVATE_KEY" 
```

Fill the CONTRACT_KEY field once you deployed the smart contract.

### Compile the smart contract

Go into the `contracts` directory:

```sh
cd contracts
```

Compile the smart contract with the `solc` compiler:

```sh
solcjs --abi --bin  --include-path ../ --base-path . -o compiled PCHNFT.sol
```

Now you will find the compiled smart contracts' bytecode and ABIs in the `compiled` directory.

### Deploy the smart contract

At this point, you can deploy the smart contract using the `deploy.js` script in the `scripts` directory.

Go into the `scripts` folder and run:

```sh
node deploy
```

You just deployed your NFT smart contract. See the [The ultimate guide to NFTs: From concept to market success](https://chainstack.com/ultimate-guide-to-nfts/) to mint your NFTs.

## Prerequisites

The system requires at least:

* Node.js: ^16.17.0— [install Node](https://nodejs.org/en/download/)
* Solc.js installed globally


## Install 

### Clone this repository

```sh
git clone https://github.com/soos3d/NFT-Minter-Tutorial.git
```

### Install dependencies

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.

### Install solc globally

```sh
npm install -g solc
```

## Examples

The following list shows how the end result looks like:

* [ Deployed NFT Contract](https://goerli.etherscan.io/address/0x144F7CF4F42FCb67D43d2B107694FFe52386D544)
* [Testorius](https://goerli.etherscan.io/tx/0xb99e7c14cd012d6be9f1cd2de12fc4585f8c3e3a9b6b038d57987265d4d1da9a)
* [Lorema](https://goerli.etherscan.io/tx/0xc5522987694a2eb97d6acca6f05a6a8707800e44c5f77d0f0871fc211a82a0d6) 
* [Sampli](https://goerli.etherscan.io/tx/0xf8db9208ebbc782ebaf5dbddcb1e372c02a5bf021489f855d4715527519fd6bc)
