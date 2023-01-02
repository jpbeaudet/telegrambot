const web3Connect = require('./web3connect');
const web3 = web3Connect('https://mainnet.infura.io', '0x1234567890abcdef');

const TelegramBot = require('node-telegram-bot-api');

module.exports = function(botToken) {
  const bot = new TelegramBot(botToken, { polling: true });

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `You said: ${msg.text}`);
  });

  function subscribeToEvent(eventName) {
    web3.subscribeToEvent(eventName, (error, event) => {
      if (error) {
        console.error(error);
        return;
      }
      bot.sendMessage(chatId, `An event was emitted: ${event}`);
    });
  }

  return {
    subscribeToEvent
  };
};
