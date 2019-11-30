const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    
    if (message.mentions.users.size === 0) {
        return message.reply("Napiši: `+roast @neko` da ga skuriš!").catch(console.error);
    }

    let roastMember = message.guild.member(message.mentions.users.first());

    if (!roastMember) {
        return message.reply(", ova budala ne postoji!");
    }

    let roasts = [
        'Mama ti je toliko glupa da krade besplatan kruh.',
        'Mama ti je toliko glupa da ju pregazi parkirani kombi.',
        'Mama ti je tolko debela da je NASA mislila da je planet.',
        'Mama ti je tolko glupa i debela da jedina slova koja zna su KFC.',
        'Tolko si ružan da kad bi bacil bumerang nebi ti se vratil.',
        'Jedini način na koji ćeš ikada jebat je ako se popneš do pilećeg šupka i čekaš.',
        'Znanstvenici kažu da je svemir sastavljen od neutrona, protona i elektrona. Zaboravili su spomenuti morone.',
        'Tolko si ružan da si TI razlog zbog kojeg vanzemaljci nikad nisu dosli na Zemlju.',
        'Tolko si debel da bi mogal prodavat sijene.',
        'Koji seksualni položaj proizvodi najružniju djecu? Pitaj svoju mamu.',
        'Tolko si debel da kad bi igral Brawlhallu bil bi stadion na kojem se odvija borba.',
        'Tolko si ružan da  kad pogledaš u ogledalo, tvoj odraz gleda u stranu.',
        'Tolko si debel da te ni Ninja ni Tfue skupa nebi mogli carryat u Fortniteu.',
        'Tolko si debel da kad si iskočil iz battle busa uništil si mapu.',
        'Tolko si debel da te Battle bus nebi mogal nosit.',
        'Tolko si ružan da si razlog zbog kojeg su dinosauri izumrli.',
        'Mama ti je tolko glupa da kad joj je krepala baterija na mobitelu, SAHRANILA GA JE.',
        'Tolko si ružan da kad bi igral granny, ona bi bježala od tebe.',
        'Tolko si nizak da kad igraš Fortnite možeš se sakrit ispod storma.',
        'Tolko si debel da te ni Thanos nebi mogal izbrisat iz postojanja.',
        'Tolko si debel da kad bi sad umrl, ni tvoj duh nebi mogal odletit.',
        'Tolko si ružan da kad bi instaliral Antivirus na komp počel bi brisat tvoje slike.',
        'Tolko si debel da ni Uganda Knuckles nije mogal nac da wae oko tebe.',
        'Tolko si ružan da i slijepi ljudi plaču kad te vide.',
        'Tolko si ružan da ti je i Hello Kitty rekla doviđenja.'
    ];

    let randomNumber = Math.floor(Math.random() * roasts.length);
    let roast = roasts[randomNumber];

    message.channel.send(roastMember + ", " + roast);
}
 
module.exports.help = {
  name: "roast"
}
