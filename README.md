# telegrambot
sample telegram bot to subscribe to emiited event from provided smart contract address and post it on telegram

## Chatbot
To use the chatbot module, you'll need to install the node-telegram-bot-api library:

```
npm install node-telegram-bot-api
```

Then, you can require the chatbot module and use it to create a new Telegram chatbot:

```
const chatbot = require('./chatbot');
const bot = chatbot('123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11');
```

To subscribe to events emitted by the chatbot, you can use the subscribeToEvent function:

```
bot.subscribeToEvent((event) => {
  console.log(event);
});
```

## Web3 Connector
To use the web3 connector module, you'll need to install the web3 library:

```
npm install web3
```

Then, you can require the web3 connector module and use it to create a new Web3 object:

```
const web3Connect = require('./web3connect');
const web3 = web3Connect('https://mainnet.infura.io', '0x1234567890abcdef');
```

To subscribe to events emitted by the smart contract, you can use the subscribeToEvent function:

```
web3.subscribeToEvent('MyEvent', (error, event) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(event);
});

```
