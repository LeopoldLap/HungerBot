const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.on('message' , message => {

    if(message.content === "!Rules"){
        message.reply('Bienvenue sur notre serveur Hunger Games Fortnite en mode créatif.\n \nLes règles et les spécificités du Hunger Games sont les suivantes :\n \n-les alliances sont strictement interdites \n-il n’y a pas de construction\n-si les tournois sont en équipes les morts sont instantanées\n-les failles sont interdites (même si elles sont disponibles dans les coffres)\n \nToutes infractions de ces règles vaut un bannissement définitif\n \nLes classements se font sur le système de points suivants :\n-1 kill=2 points \n-de la quatorzième à la onzième aucun point n’est marqué, le dixième marque 1 point, le neuvième 2 points ainsi de suite jusque la deuxième place et le premier marque 11 points.');
        console.log('Bot Speak');
        }
});

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: ' + member.user + ' à rejoint le serveur discord Hunger Games, Bienvenue !')
    member.guild.channels.get('531897918895161354').send(embed)
    member.addRole('531145166954823690')
});
