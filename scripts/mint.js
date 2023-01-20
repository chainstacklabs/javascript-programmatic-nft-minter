//Process dependencies
require('dotenv').config();
const endpoint = process.env.ENDPOINT_URL;
const address = process.env.PUBLIC_KEY;
const privKey = process.env.PRIVATE_KEY;
const contractAdrs = process.env.CONTRACT_KEY;
var fs = require('fs');
var contractNFT = JSON.parse(fs.readFileSync('./PCHNFT_sol_PlaceholderHeroes.abi', 'utf8'));
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || endpoint);
var metadata = 'https://ipfs.io/ipfs/QmZZXrLMFFXYAcSQmjmtGNqc6ZhYe2ECCoANFAXVBS3T7y?filename=sampli.json';

//Create new contract object
const contractObj = new web3.eth.Contract(contractNFT, contractAdrs)

//Begin asynchronous mint function
const startMint = async (tokenId) => {
     console.log('Attempting to mint to: ', address);

//Wait for the completion of the following mint transaction
const mintTX = await web3.eth.accounts.signTransaction(
      {
         from: address,
         to: contractAdrs,
         data: contractObj.methods.safeMint(address, metadata).encodeABI(),
         gas: '2968862',
      },
      privKey
   );

//Wait for the completion of the mint transaction then return receipt
const createReceipt = await web3.eth.sendSignedTransaction(
      mintTX.rawTransaction
   );
   console.log('NFT successfully minted with hash: ', createReceipt);
};

//Don't forget to run the minting function!
startMint(metadata);
