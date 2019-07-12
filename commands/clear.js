const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let prefix = config.prefix;
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let arg = cont.slice(1);
    async function purge() {
      message.delete();
      if (isNaN(arg[0])) {
        message.channel.send('Koristi broj kao argument. Napiši: prefix `' + prefix + '` onolko kolko oćeš obrisat');
        return;
      }
      const fetched = await message.channel.fetchMessages({
        limit: arg[0]
      });
      //console.log(fetched.size + ' messages found, deleting...');
      message.channel.sendMessage("Pobrisal sam ti `" + fetched.size + "` poruka/e");
      message.channel.bulkDelete(fetched)
        .catch(error => message.channel.send(`Error: ${error}`));
    }
    purge();
  
}

module.exports.help = {
    name: "clear"
}