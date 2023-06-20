const TelegramBot = require('node-telegram-bot-api');

const token = '6163670830:AAH238REto7NJvKnhD1rf5rqsn1H9kaNMXk';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const { text } = msg;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, text)
})