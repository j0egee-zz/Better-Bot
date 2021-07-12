const { MessageEmbed } = require('discord.js')

module.exports = async (message, Discord) => {
    let embed = new MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setTitle('Message delete')
        .setDescription(`${message.author}'s message was deleted in ${message.channel}`)
        .addField(`Message content`, message.content)

    let logs = message.guild.channels.cache.get('863156995201040384')
    logs.send(embed)
}