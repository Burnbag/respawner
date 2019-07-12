const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.delete();
    let modrole = message.guild.roles.find("name", "MODERATOR");
    if (!message.member.roles.has(modrole.id)) {
      return message.reply("Nemaš dozvolu za ovu komandu !").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Odaberi membera koga želiš IZBACITI !").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.reply("Ovaj user nije važeći !");
    }
    if (!message.guild.member(bot.user).guild.me.hasPermission("KICK_MEMBERS")) {
      return message.reply("Nemam dozvolu za kickati ljude !").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply(`${member.user.username} je uspješno izbačen !`);
    }).catch(console.error);
}

module.exports.help = {
    name: "kick"
}