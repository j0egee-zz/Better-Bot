const kickSchema = require('../models/kick-schema')

module.exports = {
    name: 'kick',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    description: "Kick a member in your server!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = message.mentions.users.first();
        const staff = message.author;

        if (!target) return message.reply('Please say what user you want to kick.');
        
        const member = message.guild.members.cache.get(target.id);

        const reason = message.content.split(`-kick ${args[0]}`).join("");

        if (!reason) return message.reply('Be sure to state your reason for this kick.')

        await new kickSchema({
            userID: target.id,
            userTag: target.tag,
            guildID: message.guild.id,
            reason: reason,
            staffID: staff.id,
            staffTag: staff.tag,
        }).save()

        const kickEmbed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setTitle('You have been kicked!')
            .setAuthor(target.tag)
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setDescription(`You have been kicked by <@${message.author.id}> in *${message.guild.name}* for the reason "**${reason}**"`);

        target.send({embeds: [kickEmbed]});


        member.kick(`${message.author.tag}: ${reason}`);
        message.reply(`<@${target.id}> has been kicked from this server.`);
    }
}