const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js');

const provider = new HDWalletProvider(
	'wink soon will bitter float erase during grief cave elephant coconut before',
	'https://rinkeby.infura.io/MDPvhC99wGW3iQgiLxuL'
);
const web3 = new Web3(provider);
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from the account: ', accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({data: '0x' + bytecode, arguments: ['Hi there!']})
	.send({from: accounts[0], gas: '1000000'});
	console.log('Contract delpoyed to: ', result.options.address);
	// console.log(result);
};
deploy();