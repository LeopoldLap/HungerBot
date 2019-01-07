const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.on('message' , message => {

    if(message.content === "!Rules"){
        message.reply("je suis \nheureux");
        console.log('Bot Speak');
        }
});
