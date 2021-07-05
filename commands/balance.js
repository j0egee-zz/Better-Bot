module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    cooldown: 1,
    description: "Check the user balance",
    execute(client, message, cmd, args, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Your balance is:')
                .setDescription(`**Coins**- *${profileData.coins}*!\n`
                + `**Bank**- *${profileData.bank}*!`);

               message.channel.send(embed)
    },
  };