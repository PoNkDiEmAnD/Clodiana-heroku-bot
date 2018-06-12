const Discord = require("discord.js");

const commando = require('discord.js-commando')

const TOKEN = "NDU1MzY5ODk5NjUzNDY0MDc0.DgB4pw.XxqlkF6uivB0Vgzguh93BMcWVi0";

const PREFIX = "Clod!";

var bot = new Discord.Client();

var fortune = [
    "yes",
    "no",
    "i dont think so",
    "Yes, but you'll die",
    "No, but you'll die",
    "No, you will play minecraft n a w",
    "No, you dumbass",
    "Yes, you dumbass",
    "Stfu, that quastion is personal >:C"

];

bot.on("ready", function(message) {
    console.log ("ready to go home now")
});

bot.on("message", function(message){
   if (message.author.equals(bot.user)) return;



var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0]) {
    case "say":
    message.channel.send("No,stfu");
    break;

    case "8ball":
    if (args[1]) message.channel.send(fortune[Math.floor(Math.random() * fortune.length)]);
       else message.channel.send("Sorry, but i only speak english...");
     break;

     case "Bitch" :
     message.channel.send('No u C:<');
     break;

     case "help" :
     message.channel.send('ehhhh to lazy to add that...');
     break;

     case "Fuck-me-hard" :
     message.channel.send('No, u aint thicc..');
     break;

     case "Clodism" :
     message.channel.send('Clodism is a religion based on a random image found on google, with a dash of memes and a teaspoon of cringe...');
     break;

     case "Do-you-like-Ponk?" :
     message.channel.send('NOT ANYMORE! BECAUSE OF HER MOM I DIED AND I NEVER GOT TO MINE A DIAMOND >:C');
     break;
    }
});

bot.login(TOKEN);
