const Discord = require("discord.js");
const config = require('../config.json');

let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor("#3780df")
    .setTitle(`Komande za ${config.ime}-a`)
    .addField(prefix + "clear")
    .addField(prefix + "avatar")
    .addField(prefix + "flipcoin")
    .addField(prefix + "boomer")
    .addField(prefix + "roast")
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "help"
}