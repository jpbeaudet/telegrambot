const web3Connect = require('./web3connect');
const web3 = web3Connect('https://mainnet.infura.io', '0x1234567890abcdef');

web3.subscribeToEvent('MyEvent');
