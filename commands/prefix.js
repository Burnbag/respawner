const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.delete();
    message.channel.send("Prefix/komanda za ovog bot-a je `" + "+" + "`");
}

module.exports.help = {
    name: "prefix"
}