const profileModel = require("../models/profileSchema");

module.exports = {
    name: "pay",
    aliases: [],
    permissions: [],
    cooldown: 0.2,
    description: "Pay a member in the server some coins!",
    async execute(client, message, cmd, args, Discord, profileData) {
        if (!args.length) return message.channel.send('You need to mention a user in this guild.');
        const amount = parseInt(args[1])
        const target = message.mentions.users.first();
        const user = message.author;
        if (!target) return message.channel.sent('The user you mentioned is not in this guild.');

        if (target.id === user.id) return message.channel.send(`You can not pay yourself!`);

        let userData = await profileModel.findOne({ userID: user.id, serverID: message.guild.id });
        let targetData = await profileModel.findOne({ userID: target.id, serverID: message.guild.id });

        if (amount % 1 != 0 || amount <= 0) return message.channel.send('The pay amount must be a whole number grader then 0.');

        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setTitle(`Confirm payment`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Please react with the ✅ to confirm your payment of **${amount.toLocaleString()} coins** to ${target}.\n\n*Once you confirm there is no going back.*`);

        if (userData.coins < amount) return message.channel.send('You do not have enough money to pay that user with.');

        else {

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(`✅`)
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
                if (user !== message.author) return;
                if (reaction.message.id !== messageEmbed.id) return;

                if (reaction.emoji.name === `✅`) {

                    const payEmbed = new Discord.MessageEmbed()
                        .setColor('FADF2E')
                        .setTimestamp(Date.now())
                        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                        .setTitle(`Payment successful`)
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${target} has been payed **${amount.toLocaleString()} coins**.`)

                    message.channel.send(payEmbed);

                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                        serverID: message.guild.id
                    }, {
                        $set: {
                            coins: userData.coins - amount,
                        },
                    }
                    );
                    await profileModel.findOneAndUpdate({
                        userID: target.id,
                        serverID: message.guild.id
                    }, {
                        $inc: {
                            coins: amount,
                        },
                    }
                    );


                    messageEmbed.delete()

                }
            }
            )
        }
    }
}