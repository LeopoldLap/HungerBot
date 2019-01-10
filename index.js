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
    member.guild.channels.get('531924899237855252').send(embed)
    member.addRole("531145166954823690")
});

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
        }
});
