const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  let randomanketa = Math.floor(Math.random() * 2 + 1);
  message.delete()
  //message.channel.sendMessage("Random odabir PISMA ili GLAVE")
  if (randomanketa === 1) {
    var embed = new Discord.RichEmbed()
      .setColor("#3780df")
      .addField("GLAVA", "HEAD")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/6/62/US_Nickel_2013_Obv.png")
      .setFooter("respawner / Za pomoć napišite +help")
    message.channel.sendEmbed(embed);
  } else if (randomanketa === 2) {
    var embed = new Discord.RichEmbed()
      .setColor("#3780df")
      .addField("PISMO", "BACK")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/2/2d/US_50_Cent_Rev.png")
      .setFooter("respawner / Za pomoć napišite +help")
    message.channel.sendEmbed(embed);
  }
  
}

module.exports.help = {
    name: "flipcoin"
}