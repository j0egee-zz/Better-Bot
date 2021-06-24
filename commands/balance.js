module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    cooldown: 1,
    description: "Check the user balance",
    execute(client, message, cmd, args, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Your balance is:')
                .setDescription(`**Coins**- *${profileData.coins}*!\n`
                + `**Bank**- *${profileData.bank}*!`);

               message.channel.send(embed)
    },
  };