module.exports = {
    name: 'flipacoin',
    permissions: [],
    aliases: ['fac', 'coinflip'],
    cooldown: 0,
    description: "Coin flip game",
    async execute(client, message, cmd, args, Discord, profileData) {

        const randomNumber = Math.floor(Math.random() * 2) + 1;

        const headsEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`Coin flip results!`)
        .setDescription(`Heads`)

        const tailsEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`Coin flip results!`)
        .setDescription(`Tails`)

        message.delete()

        if(randomNumber === 1) return message.channel.send(headsEmbed);

        if(randomNumber === 2) return message.channel.send(tailsEmbed);
    }
}