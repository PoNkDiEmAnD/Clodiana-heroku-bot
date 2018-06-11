const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Clod!ping') {
    	message.reply('pong');
client.on('message', message => {
    if (message.content === 'Clod!clodism') {
    	message.reply('Clodism is a religion/cult based on a image found randomly on goodle, with a dash of memes and a teaspoon of cringe');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
