const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  message.delete();
  message.channel.sendMessage("Tvoj avatar je:" + message.author.avatarURL)
}

module.exports.help = {
    name: "avatar"
}