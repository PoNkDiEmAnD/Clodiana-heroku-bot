
var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./token.json');
// logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // The bot listens for command messages which we set to start with `Clod!`
    if (message.substring(0, 1) == 'Clod!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // Clod!start
            case 'start':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi! :3 <@' + userID +'>'
                });
            break;
            // add any other commands here.
          // Clod!say somthing
            case 'say somthing':
                bot.sendMessage({
                    to: channelID,
                    message: 'No stfu <@' + userID +'>'
                });
            break;
     }
});
