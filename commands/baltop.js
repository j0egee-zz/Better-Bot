module.exports = {
    name: "baltop",
    aliases: ["ballead", "balleaderboard", "bl", "mostmoney"],
    permissions: [],
    cooldown: 1,
    description: "Check the user balance",
    async execute(client, message, cmd, args, Discord, profileData) {
        const bal1 = await profileModel.findOne({ userID: target.id})

        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setAuthor('Balance Leaderboard')
        .setDescription(`**#1 <@${bal1.userID}>** having *${bal1.coins} coins*\n`+
        `**#2 <@${bal2.userID}>** having *${bal2.coins} coins*\n`+
        `**#3 <@${bal3.userID}>** having *${bal3.coins} coins*\n`+
        `**#4 <@${bal4.userID}>** having *${bal4.coins} coins*\n`+
        `**#5 <@${bal5.userID}>** having *${bal5.coins} coins*`);
    }
}