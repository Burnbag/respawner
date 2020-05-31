const Discord = require("discord.js");
const config = require('../config.json');

let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor("#3780df")
    .setTitle(`Komande za ${config.ime}-a`)
    .addField(prefix + "clear", "Briše poruke (Odaberi kolko oćeš obrisat)")
    .addField(prefix + "avatar", "Pokazuje vaš avatar")
    .addField(prefix + "flipcoin", "Igra Glava pismo")
    .addField(prefix + "roast", "Kurenje")
    .addField(prefix + "boomer", "Šalje gif")
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "help"
}