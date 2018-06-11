const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Clod!clodism') {
    	message.reply('Clodism is a religion based on a random image found on google with a dash of memes and a teaspoon of cringe')
          if (message.content === 'Clod!Holy clod') {
    	message.reply('The Holy clod (Ponk diemand) is the creator of the great CLODISM server')
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
