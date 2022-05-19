d/*
    Developer: Dr. Marbel
    Debug Assistant: SquishTech
    Date: 4/21/21

    This is the code for Mr. Belmar, the bot.
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env['DISCORD_TOKEN'];
// const stayAwake = require("./server");

var http = require('http');
const PREFIX = "/";

http.createServer(function (req, res) {   
  res.write("Server is ready.");   
  res.end(); 
}).listen(8080);

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`)
  let activities = [`Cleaning the floors`, `Hanging the paintings`, `Dusting the bookshelves`, `Assisting Dr. Marbel`   ],i = 0;

  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c"  }), 5000)});

client.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(" ");
  console.log(args);

  switch (args[0]) {
    case 'Hello':
      msg.reply('Hiya! How can I help you?');
      break;
    case 'hello':
      msg.reply('Hiya! How can I help you?');
      break;
    case 'hey':
      if (msg.content.startsWith(PREFIX)) {
        msg.reply("Aye! What's up?");
        break;
      } else if (!msg.content.startsWith(PREFIX)) {
        return;
      }
    case 'Hey':
      if (msg.content.startsWith(PREFIX)) {
        msg.reply("Aye! What's up?");
        break;
      } else if (!msg.content.startsWith(PREFIX)) {
        return;
      }
    case 'Website':
      msg.channel.send("Alright! Here is Dr. Marbel's website: https://drmarbel.github.io");
      break;
    case 'website':
      msg.channel.send("Alright! Here is Dr. Marbel's website: https://drmarbel.github.io");
      break;
    case 'Goodbye':
      if (message.content.indexOf(config.prefix) !== 0) {
        return;
      }
      msg.reply("Alrighty, then! Goodbye and have a good one!");
      break;
    case 'goodbye':
      msg.reply("Alrighty, then! Goodbye and have a good one!");
      break;
    case 'identity':
      if (msg.member.nickname != null) {
        msg.channel.send(`You are ${msg.author.username} and your nickname is ${msg.member.nickname}.`);
      } else {
        msg.channel.send(`You are ${msg.author.username}.`);
      }
      break;
    case 'Identity':
      if (msg.member.nickname != null) {
        msg.channel.send(`You are ${msg.author.username} and your nickname is ${msg.member.nickname}.`);
      } else {
        msg.channel.send(`You are ${msg.author.username}.`);
      }
      break;
    case 'nickname':
      let nickname = args.slice(1).join(" ");
      var newNick = nickname;
      if (!nickname) {
        return msg.channel.send({
          embed: {
            color: "RED",
            description: "Please include a nickname for me to set."
          }
        });
      } else {
        if (msg.content.includes('nickname')) {
          if (!msg.guild.me.hasPermission('MANAGE_NICKNAMES')) {
            return msg.channel.send(`I do apologize, ${msg.author.username}, but I do not have that ability.`);
          } else if (msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send(`I do apologize, Master ${msg.author.username}, but you are the administrator here. You can do it yourself.`);
          } else {
            msg.member.setNickname(msg.content.replace('/nickname', ''));
          }
        }

        return msg.channel.send({
          embed: {
            color: "PURPLE",
            description: `I've taken the liberty of changing your nickname, ${newNick}.`
          }
        });
      }
      break;
    case 'CmdHelp':
      msg.reply('I see that you need assistance. No surprise there. These are the commands that I answer to:');
      msg.channel.send('!hello, !Hello, !hey, !Hey, !website, !Website, !nickname, !Nickname, !bel help, !bel Help, !identity, and, finally, !Identity');
      break;
    case 'cmdHelp':
      msg.reply('I see that you need assistance. No surprise there. These are the commands that I answer to:');
      msg.channel.send('!hello, !Hello, !hey, !Hey, !website, !Website, !nickname, !Nickname, !cmdHelp, !CmdHelp, !identity, and, finally, !Identity');
      break;
  }
});

client.login(TOKEN);