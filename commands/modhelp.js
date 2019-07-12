const Discord = require("discord.js");
const config = require('../config.json');

var prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
    message.delete();
    var embed = new Discord.RichEmbed()
      .setColor("#3780df")
      .setTitle("MODERATOR komande za COLAPIS bot-a")
      .addField(prefix + "kick", "Izbacuje određenog membera")
      .addField(prefix + "ban", "Bana određenog membera")
    //.addField(prefix + "mute", "Mute-a određenog membera")
    //.setThumbnail("http://is2.mzstatic.com/image/thumb/Purple20/v4/91/b1/b5/91b1b5d9-4de6-72d5-fcd7-09946e645ce5/source/512x512bb.jpg")
    //.setFooter("respawner / Za pomoć napišite +help")
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "modhelp"
}