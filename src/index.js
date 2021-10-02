const { Client, Intents, DiscordAPIError, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});
require('dotenv').config();

client.on('ready', () =>{
    console.log('Ready!');
});

//welcome Message
client.on("guildMemberAdd", member =>{
    let embed = new DiscordAPIError.RichEmbed
        .setDescreption("!!!"+"joined the server :D")
        .setFooter("we are now " + member.guild.memberCount)
        .setColor("RANDOM")
        .setImage("https://media.giphy.com/media/5UDHLOVzz8xmFTM9o2/giphy.gif")
        .setTimestamp()
    member.guild.channels.get('889452898864476163').sendMessage(embed)
})


(async () => {
    client.login(process.env.TOKEN);
})();