const ms = require('ms');

module.exports = {
    name: 'mute',
    aliases: ['tempmute', 'timeout'],
    permissions: ["KICK_MEMBERS"],
    description: "Mute a member in your server!",
    execute(client, message, cmd, args, Discord, profileData) {
        const target = message.mentions.users.first();

            
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                memberTarget.guild.channels.cache.get('849850651218411530').send(`${message.author.tag}, <@${memberTarget.user.id}> has been muted!`);
                message.delete()
                return
            }
            memberTarget.roles.add(muteRole.id);
            memberTarget.guild.channels.cache.get('849850651218411530').send(`${message.author.tag}, <@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}!`)

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.guild.channels.cache.get('849850651218411530').send(`<@${memberTarget.user.id}>'s mute has expired!`)
            }, ms(args[1]));


        } else {
            message.channel.send('I cant seem to mute that member. Please re-check your command and try again.');

        }
        message.delete()
    }
}