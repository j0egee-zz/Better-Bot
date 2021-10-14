const banSchema = require('../models/ban-schema')

module.exports = {
    name: 'ban',
    aliases: [],
    permissions: ["BAN_MEMBERS"],
    description: "Ban a member in your server!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = message.mentions.users.first();
        const staff = message.author;

        if (!target) return message.reply('Please say what user you want to ban.');

        const member = message.guild.members.cache.get(target.id);

        const reason = message.content.split(`-ban ${args[0]}`).join("");

        if (!reason) return message.reply('Be sure to state your reason for this ban.')

        await new banSchema({
            userID: target.id,
            userTag: target.tag,
            guildID: message.guild.id,
            reason: reason,
            staffID: staff.id,
            staffTag: staff.tag,
            current: true
        }).save()

        const banEmbed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setTitle('You have been banned!')
            .setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setDescription(`You have been banned by <@${message.author.id}> in *${message.guild.name}* for the reason "**${reason}**"`);

        target.send(banEmbed);

        member.ban({ reason: `${message.author.tag}: ${reason}`, days: 7 });
        message.reply(`<@${target.id}> has been banned from this server.`);
    }
}