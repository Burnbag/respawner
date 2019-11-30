const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  message.delete();

  message.channel.send("Ping : `" + bot.ping + "ms`");
}

module.exports.help = {
    name: "ping"
}