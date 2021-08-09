const muteSchema = require("../models/mute-schema");

module.exports = {
    name: 'unmute',
    aliases: ['umute', 'removemute'],
    permissions: ["KICK_MEMBERS"],
    description: "Unmute a member in your server!",
    async execute(client, message, cmd, args, Discord, profileData) {
        const target = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(target.id);

        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        try {
            const targetData = await muteSchema.findOne({ userID: target.id, guildID: message.guild.id, current: true });
            if (!targetData) return message.channel.send(`This user is not muted`);

           await muteSchema.updateMany(targetData, {
            current: false,
          })

            const UmuteEmbed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('New unmute!')
            .addField(`User`, `<@${target.id}>`)
            .addField(`Reason`, `${targetData.reason}`)
            .addField(`Staff member (Muted)`, `<@${targetData.staffID}>`)
            .addField(`Staff member (Unmuted)`, `<@${message.author.id}>`)

            return message.guild.channels.cache.get('863156995201040384').send(UmuteEmbed) && client.users.cache.get('473850297702285322').send(UmuteEmbed) && memberTarget.roles.remove(muteRole) && message.reply(`${target.tag} is now unmuted.`);

        } catch (err) {
            console.log(err)
        }
    }

}