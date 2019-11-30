const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor("#3780df")
    .setTitle("Bot info")
    .addField("Ime:", config.ime)
    .addField("Verzija:", config.verzija)
    .addField("Prefix:", config.prefix)
    .addField("Vlasnik:", config.vlasnik)
    //.setFooter("respawner / Za pomoć napišite +help")
    //.setThumbnail("http://is2.mzstatic.com/image/thumb/Purple20/v4/91/b1/b5/91b1b5d9-4de6-72d5-fcd7-09946e645ce5/source/512x512bb.jpg")
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "botinfo"
}