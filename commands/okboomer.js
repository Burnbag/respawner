const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    
    let modrole = message.guild.roles.find("name", "VIP");
    if (!message.member.roles.has(modrole.id)) {
      return message.reply("Nemaš dozvolu za ovu komandu !");
    }
    var timesRun = 0;
    var boomerCmdRunNumber = 5;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === boomerCmdRunNumber){
            clearInterval(interval);
        }
        message.channel.sendMessage("Ok boomer!");
    }, 500); 
}

module.exports.help = {
    name: "okboomer"
}