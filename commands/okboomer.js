const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    
    message.delete();

    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 5){
            clearInterval(interval);
        }
        message.channel.sendMessage("Ok boomer!");
    }, 500); 
}

module.exports.help = {
    name: "okboomer"
}