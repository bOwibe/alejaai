const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "!"
var nazwabota = "4 Aleja AI"
const client = new Discord.Client();
const hook = new Discord.WebhookClient('655728417123074068', '6WKtSGDXfzrARh8QmJrSeZeM33DqhBaluuOX1l4GwHnlUaSygLZfvKFMrqsg5Pp73yhg');

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} jest online`)
    bot.user.setActivity("4 Aleja", {type: "STREAMING"});
});


bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()



    
if(command == "say"){
    message.delete() 
  
    var wiadomosc = message.content.slice(prefix.length+3)
  var embed =  new Discord.RichEmbed()
  .addField(message.author, wiadomosc, false)
  return message.channel.send(embed)
}


if(command == "moneta"){
  message.delete() 
  var wynik = (Math.floor(Math.random() * 2) == 0) ? 'Orzeł' : 'Reszka'
  var embed = new Discord.RichEmbed()
  .setTitle("🎲 Wynik losowania:")
  .setDescription(wynik)
  .setColor("RANDOM")
  return message.channel.send(embed)

}

if(command == "propozycja"){
  message.delete()
  var wiadomsc = message.content.slice([prefix.length+10])
  var embed = new Discord.RichEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .addField("Treść propozycji:", wiadomsc, false)
  .setColor("RANDOM")
  .setFooter("✅ - TAK, ❌ - NIE")

  var kanal = bot.channels.get("662975822352744449")
  return kanal.send(embed).then(async embedMessage =>{
    await embedMessage.react('✅')
    await embedMessage.react('❌')
    return
  })
}



if(command == "głosowanie"){
  message.delete()
  var wiadomsc = message.content.slice([prefix.length+10])
  var embed = new Discord.RichEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .addField("Treść głosowania:", wiadomsc, false)
  .setColor("RANDOM")
  .setFooter("✅ - TAK, ❌ - NIE")

  var kanal = bot.channels.get("662976197965250578")
  return message.channel.send(embed).then(async embedMessage =>{
    await embedMessage.react('✅')
    await embedMessage.react('❌')
    return
  })
}



if (command == "regulamin"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("Regulamin")
  .setDescription("Aby zweryfikować się naciśnij reakcję :white_heart: poniżej!")
  .setFooter("Know#7449")
  return message.channel.send(embed)
}

if (command == "battle"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("Battle Royale")
  .setDescription("Aby otrzymać dostęp do kanałów Battle Royale się naciśnij reakcję :white_heart: poniżej!")
  .setFooter("Know#7449")
  return message.channel.send(embed)
}
if (command == "ratowanie"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("Ratowanie Świata")
  .setDescription("Aby otrzymać dostęp do kanałów Ratowania Świata naciśnij reakcję :white_heart: poniżej!")
  .setFooter("Know#7449")
  return message.channel.send(embed)
}
if (command == "league"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("League Of Legends")
  .setDescription("Aby otrzymać dostęp do kanałów League Of Legends naciśnij reakcję :white_heart: poniżej!")
  .setFooter("Know#7449")
  return message.channel.send(embed)
}


if(command == "donate"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("Donate")
  .setDescription("Jeżeli chcesz nas wesprzeć odezwij się w wiadomości prywatnej do Stormik bądź Know")
  .setFooter("Każda wpłata jest dobrowolna a zwroty są nie możliwe.")
  return message.channel.send(embed)

}


if(command == "zaproszenie"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("Oficjalne zaproszenie na nasz Discord!")
  .setDescription("https://discord.gg/necmRFu")
  .setFooter("Know#7449")
  return message.channel.send(embed)
}

if(command == "partner1"){
  message.delete()
  var embed = new Discord.RichEmbed()
  .setTitle("tech_fivem")
  .setDescription("https://discord.gg/pTTjTkR")
  .setFooter("Know#7449")
  return message.channel.send(embed)
}




if(command == "infoserwer"){
  message.delete()
    var embed = new Discord.RichEmbed()
    .addField("Nazwa Serwera:", message.guild.name, true)
    .addField("Właściciel serwera:", message.guild.owner.user.tag, true)
    .addField("Data stworzenia serwera:", message.guild.createdAt, false)
    .addField("Data dołączenia na serwer:", message.guild.joinedAt, false)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL)
    .setAuthor(message.member.user.username, message.member.user.avatarURL)
    .setThumbnail(message.guild.iconURL)
    .setImage(message.guild.iconURL)


    return message.channel.send(embed)
}
});

bot.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('name', '👐nowi');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Know AI")
    .setDescription(member.user.username + " dołączył na serwer. (" + member.user.id + ")")
    .setColor('RANDOM')
    .setFooter("Użytkownik dołączył", member.user.displayAvatarURL)
    .setTimestamp()
    logChannel.send(logEmbed);
  

  var role = member.guild.roles.find('name', '🔒Weryfikacja');
  member.addRole(role);
    
});

client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply( `${user.tag} został wyrzucony`);
          }).catch(err => {
            message.reply(`Nie jestem wstanie ${user.tag} wyrzucić`);
            console.error(err);
          });
        } else {
          message.reply('Nie ma takiej osoby na tym discordzie!');
        }
      } else {
        message.reply('Nie oznaczyłeś nikogo!');
      }
    }
  });







  hook.send('**Bot Activated!**');

bot.login(botconfig.token)
client.login('NjU1NzI3NjE3NzUxNzc3MzQx.XfYUWw.GTwmeZJGxO56JY-kZmabaaMSzY4');