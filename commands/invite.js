const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.delete();
    message.channel.send("Invite za server: https://discord.gg/fz8QKpr");
}

module.exports.help = {
    name: "invite"
}