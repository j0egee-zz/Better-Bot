module.exports = {
    name: 'dm',
    aliases: ['message', 'botdm'],
    permissions: ["ADMINISTRATOR"],
    description: "Direct message anyone in the server from the bot!",
    async execute(client, message, cmd, args, Discord, profileData) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send('You must mention a user in this guild, or say there user id!');
        if (!args.slice(1).join(" ")) return message.channel.send('You must say the message.');

        const dmEmbed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Direct message sent!')
            .setDescription(args.slice(1).join(" "));


        user.user.send(args.slice(1).join(" ")).then(() => message.channel.send({embeds: [dmEmbed]})).catch(() => message.channel.send(`${user.user.tag} is not accepting DM's.`))
    }
}