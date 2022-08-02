//Process dependencies
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'https://YOUR_CHAINSTACK_ENDPOINT_HERE');

//Create new wallet-key pair then return values
var keys = web3.eth.accounts.create();
console.log(keys);
