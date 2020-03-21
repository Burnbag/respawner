require('dotenv').config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs"); 
const config = require('./config.json');
const prefix = config.prefix;
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on('ready', () => {
  bot.user.setPresence({
    status: 'online',
    game: {
      type: "PLAYING",
      name: ''
    }
  });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN); 