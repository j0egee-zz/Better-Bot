module.exports = {
    name: "baltop",
    aliases: ["ballead", "balleaderboard", "bl", "mostmoney"],
    permissions: [],
    cooldown: 0.3,
    description: "Check the user balance",
    async execute(client, message, cmd, args, Discord, profileData) {
        const results = await profileData.find({ serverID: message.guild.id }).sort(coins)

        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor('Balance Leaderboard')
            .setDescription(results);
    }
}