const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let uvrede = 25;
    let rr = Math.floor(Math.random() * uvrede + 1); 
    if (message.mentions.users.size === 0) {
        return message.reply("Napiši: `+roast @neko` da ga skuriš!").catch(console.error);
    }
    let roastMember = message.guild.member(message.mentions.users.first());
    if (!roastMember) {
        return message.reply(", ovaj čovik ne postoji!");
    }
    if (rr == 1) {
        message.channel.send(roastMember + ", " + "Mama ti je toliko glupa da krade besplatan kruh.");
    } else if (rr == 2) {
        message.channel.send(roastMember + ", " + "Mama ti je toliko glupa da ju pregazi parkirani kombi.");
    } else if (rr == 3) {
        message.channel.send(roastMember + ", " + "Mama ti je tolko debela da je NASA mislila da je planet.");
    } else if (rr == 4) {
        message.channel.send(roastMember + ", " + "Mama ti je tolko glupa i debela da jedina slova koja zna su KFC.");
    } else if (rr == 5) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da kad bi bacil bumerang nebi ti se vratil.");
    } else if (rr == 6) {
        message.channel.send(roastMember + ", " + "Jedini način na koji ćeš ikada jebat je ako se popneš do pilećeg šupka i čekaš.");
    } else if (rr == 7) {
        message.channel.send(roastMember + ", " + "Znanstvenici kažu da je svemir sastavljen od neutrona, protona i elektrona. Zaboravili su spomenuti morone.");
    } else if (rr == 8) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da si TI razlog zbog kojeg vanzemaljci nikad nisu dosli na Zemlju");
    } else if (rr == 9) {
        message.channel.send(roastMember + ", " + "Tolko si debel da bi mogal prodavat sijene.");
    } else if (rr == 10) {
        message.channel.send(roastMember + ", " + "Koji seksualni položaj proizvodi najružniju djecu? Pitaj svoju mamu.");
    } else if (rr == 11) {
        message.channel.send(roastMember + ", " + "Tolko si debel da kad bi igral Brawlhallu bil bi stadion na kojem se odvija borba.");
    } else if (rr == 12) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da  kad pogledaš u ogledalo, tvoj odraz gleda u stranu.");
    } else if (rr == 13) {
        message.channel.send(roastMember + ", " + "Tolko si debel da te ni Ninja ni Tfue skupa nebi mogli carryat u Fortniteu.");
    } else if (rr == 14) {
        message.channel.send(roastMember + ", " + "Tolko si debel da kad si iskočil iz battle busa uništil si mapu.");
    } else if (rr == 15) {
        message.channel.send(roastMember + ", " + "Tolko si debel da te Battle bus nebi mogal nosit.");
    } else if (rr == 16) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da si razlog zbog kojeg su dinosauri izumrli.");
    } else if (rr == 17) {
        message.channel.send(roastMember + ", " + "Mama ti je tolko glupa da kad joj je krepala baterija na mobitelu, SAHRANILA GA JE.");
    } else if (rr == 18) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da kad bi igral granny, ona bi bježala od tebe.");
    } else if (rr == 19) {
        message.channel.send(roastMember + ", " + "Tolko si nizak da kad igraš Fortnite možeš se sakrit ispod storma.");
    } else if (rr == 20) {
        message.channel.send(roastMember + ", " + "Tolko si debel da te ni Thanos nebi mogal izbrisat iz postojanja.");
    } else if (rr == 21) {
        message.channel.send(roastMember + ", " + "Tolko si debel da kad bi sad umrl, ni tvoj duh nebi mogal odletit.");
    } else if (rr == 22) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da kad bi instaliral Antivirus na komp počel bi brisat tvoje slike.");
    } else if (rr == 23) {
        message.channel.send(roastMember + ", " + "Tolko si debel da ni Uganda Knuckles nije mogal nac da wae oko tebe.");
    } else if (rr == 24) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da i slijepi ljudi plaču kad te vide.");
    } else if (rr == 25) {
        message.channel.send(roastMember + ", " + "Tolko si ružan da ti je i Hello Kitty rekla doviđenja.");
    }
}
 
module.exports.help = {
  name: "roast"
}
