const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    
    // let modrole = message.guild.roles.find("name", "VIP");
    // if (!message.member.roles.has(modrole.id)) {
    //   return message.reply("Nemaš dozvolu za ovu komandu !");
    // }
    message.channel.send({embed: { 
    color: 16777215, description:'', 
    image:  {
        url: "https://media.giphy.com/media/JOWjrrUkPwo7VZeZdK/giphy.gif"
    }
}});
}

module.exports.help = {
    name: "boomer"
}
