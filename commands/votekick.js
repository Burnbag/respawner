const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.reply("Ovaj user nije važeći !");
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Odaberi membera koga želiš IZBACITI !").catch(console.error);
    }
    message.channel.send("Da bi izbacili korisnika **" + kickMember + "** lajkajte poruku iznad");
    message.react('👍');

    bot.on('messageReactionAdd', (reaction, user) => {
      let limit = 5;
      if (reaction.emoji.name == '👍' && reaction.count >= limit) {
        kickMember.kick().then(member => {
          message.reply(`${member.user.username} je uspješno izbačen !`);
        }).catch(console.error);
      }
    });
    //message.reply('Ova funkcija trenutačno nije dostupna!');
}

module.exports.help = {
    name: "votekick"
}