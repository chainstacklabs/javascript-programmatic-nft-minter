//Process dependencies
require('dotenv').config();
const endpoint = process.env.ENDPOINT_URL;
const address = process.env.PUBLIC_KEY;
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || endpoint);

//Create new asynchronous function to get balance
const getbal = async (address) => {

//Await promise before returning balance
const balance = await web3.eth.getBalance(address);
console.log(balance);
};

//Don't forget to run!
getbal(address);
