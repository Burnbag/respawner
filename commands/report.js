const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nemrem nać korisnika");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reportani korisnik", `${rUser} ID: ${rUser.id}`)
    .addField("Reportan od", `${message.author} ID: ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Vrijeme", message.createdAt)
    .addField("Razlog", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Nemrem nać kanal `reports`");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
