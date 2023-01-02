const Web3 = require('web3');

module.exports = function(providerUrl, contractAddress) {
  const web3 = new Web3(providerUrl);

  async function getContractAbi() {
    const contract = new web3.eth.Contract(null, contractAddress);
    return await contract.methods.abi().call();
  }

  async function subscribeToEvent(eventName) {
    const contractAbi = await getContractAbi();
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    contract.events[eventName]({}, (error, event) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(event);
    });
  }

  return {
    getContractAbi,
    subscribeToEvent
  };
};
