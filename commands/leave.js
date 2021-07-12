module.exports = {
    name: 'leave',
    cooldown: 0,
    permissions: [],
    aliases: ["stop", "dc", "disconnect"],
    description: 'Stop the bot and leave the channel',
    async execute(client, message, cmd, args, Discord, profileData) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");

        await voiceChannel.leave();

        const embed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('I have left')
                .setDescription(`${voiceChannel}`);

        await message.channel.send(embed)
 
    }
}