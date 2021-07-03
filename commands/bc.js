module.exports = {
    name: 'bc',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    description: 'Send a message to a channel in the server!',
    execute(client, message, cmd, args, Discord, profileData){
        const bcChannel = message.guild.channels.cache.get(args[0])
        if(!bcChannel)return message.channel.send('You must say the channel ID you wish to send your annoucment in.')

        let messageArgs = message.content.split(`-bc ${bcChannel.id}`).join("")

        const embed = new Discord.MessageEmbed()
        .setTitle('New annoucment!')
        .setDescription(`${messageArgs}`)
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('FADF2E')
        bcChannel.send(embed)
        message.delete()
        message.reply(`I have sent your annoucment to ${bcChannel}.`)
    }
}