const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let prefix = config.prefix;
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let arg = cont.slice(1);
    async function purge() {
      //message.delete();
      if (isNaN(arg[0])) {
        message.channel.send('Koristi broj kao argument. Napiši: prefix `' + prefix + '` onolko kolko oćeš obrisat');
        return;
      }
      const fetched = await message.channel.fetchMessages({
        limit: arg[0]
      });
      //console.log(fetched.size + ' messages found, deleting...');
      let mess;
      if (fetched.size === 1) {
        mess = "poruku";
      } else if (fetched.size >= 2 && fetched.size < 5) {
        mess = "poruke";
      } else if (fetched.size >= 5) {
        mess = "poruka"
      }
      //message.channel.sendMessage("Pobrisal sam ti `" + fetched.size + "` " + mess);
      message.channel.bulkDelete(fetched)
    }
    purge();
  
}

module.exports.help = {
    name: "clear"
}