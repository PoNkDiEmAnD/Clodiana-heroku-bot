const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Clod!clodism') {
    	message.reply('Clodism is a religion based on a random image found a google with a dash of memes and a teaspoon of cringe');
client.on('message', message => {
    if (message.content === 'Clod!saysomthing') {
    	message.reply('no stfu u nub');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
