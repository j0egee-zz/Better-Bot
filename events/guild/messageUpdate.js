const {MessageEmbed} = require('discord.js')

module.exports = async(oldMessage, newMessage, Discord)=>{
    let embed = new MessageEmbed()
    .setColor('FADF2E')
    .setTimestamp(Date.now())
    .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
    .setTitle('Message update')
    .setDescription(`${oldMessage.author}'s message was updated in ${oldMessage.channel}`)
    .addField(`Old message`,oldMessage.content)
    .addField(`New message`,newMessage.content)

    let logs = oldMessage.guild.channels.cache.get('863156995201040384')
    logs.send(embed)
}