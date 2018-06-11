const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Clod!clodism') {
    	message.reply('Clodism is a religion based on a random image found a google with a dash of memes and a teaspoon of cringe');
  	}
client.on('message', message => {
    if (message.content === 'Clod!say') {
    	message.reply('no stfu u aint mah mom');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
