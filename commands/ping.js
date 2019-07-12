const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  message.delete();
  message.channel.send("Ping : `" + Math.floor(Math.random() * 333 + 1) + "ms`");
}

module.exports.help = {
    name: "ping"
}