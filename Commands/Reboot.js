const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "261877395240255491")return message.channel.send("Bu komutu sadece <@!261877395240255491> kullanabilir")
    
    message.channel.send(`Sistem yenilemesi başarılı bot yeniden başlatılıyor.`).then(msg => {
    console.log(`BOT: Sistem yenilemesi başarılı bot yeniden başlatılıyor.`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};