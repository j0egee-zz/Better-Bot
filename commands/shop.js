module.exports = {
    name: 'shop',
    permissions: [],
    cooldown: 0.1,
    description: "Open the shop commands!",
    async execute(client, message, cmd, args, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setTitle(`Shop`)
            .addField(`-buyColors`, `*5,000 coins*\nBuy access to change your server color.`)
            .addField(`-buy`)

        message.channel.send(embed)
    }
}