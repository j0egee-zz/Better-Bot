module.exports = {
    name: 'unmute',
    aliases: ['umute', 'removemute'],
    permissions: ["KICK_MEMBERS"],
    description: "Unmute a member in your server!",
    execute(client, message, cmd, args, Discord, profileData) {
        const target = message.mentions.users.first();
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);

            const uMuteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('New unmute!')
                .setDescription(`<@${message.author.id}> has unmuted <@${memberTarget.user.id}>!`);

            memberTarget.guild.channels.cache.get('863156995201040384').send(uMuteEmbed)
            client.users.cache.get('473850297702285322').send(uMuteEmbed)
        } else {
            message.channel.send('I cant seem to unmute that member. Please re-check your command and try again.');
        }
        message.delete()
    }
}