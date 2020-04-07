const Discord = require("discord.js");
const config = require('../config.json');

let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor("#3780df")
    .setTitle(`Komande za ${config.ime}-a`)
    .addField(prefix + "clear", "Briše poruke (Odaberi kolko oćeš obrisat)")
    .addField(prefix + "votekick", "Glasajte za izbacivanje korisnika")
    .addField(prefix + "avatar", "Pokazuje vaš avatar")
    .addField(prefix + "ping", "Pokazuje brzinu odaziva bot-a")
    .addField(prefix + "flipcoin", "Igra Glava pismo")
    .addField(prefix + "roast", "Kurenje!")
    //.setFooter("respawner / Za pomoć napišite +help")
    //.setThumbnail("http://is2.mzstatic.com/image/thumb/Purple20/v4/91/b1/b5/91b1b5d9-4de6-72d5-fcd7-09946e645ce5/source/512x512bb.jpg")
    //.addBlankField()
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "help"
}