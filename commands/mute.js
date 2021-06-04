const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "Mute a member in your server!",
    execute(message, args) {
        const target = message.mentions.users.first();

            
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                memberTarget.guild.channels.cache.get('533918755324035072').send(`<@${memberTarget.user.id}> has been muted!`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            memberTarget.guild.channels.cache.get('533918755324035072').send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}!`)

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.guild.channels.cache.get('533918755324035072').send(`<@${memberTarget.user.id}>'s mute has expired!`)
            }, ms(args[1]));


        } else {
            message.channel.send('I cant seem to mute that member. Please re-check your command and try again.');

        }
    }
}