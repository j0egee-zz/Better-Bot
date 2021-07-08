module.exports = {
    name: 'bc',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    description: 'Send a message to a channel in the server!',
    execute(client, message, cmd, args, Discord, profileData){
        const bcChannel = message.mentions.channels.first()
        if(!bcChannel)return message.channel.send('You must say the channel you wish to send your annoucment in.')

        let messageArgs = message.content.split(`-bc ${bcChannel}`).join("")

        const embed = new Discord.MessageEmbed()
        .setTitle('New annoucment!')
        .setTimestamp(Date.now())
        .setDescription(`${messageArgs}`)
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('FADF2E')
        bcChannel.send(embed)
        message.delete()
        message.reply(`I have sent your annoucment to ${bcChannel}.`)
    }
}