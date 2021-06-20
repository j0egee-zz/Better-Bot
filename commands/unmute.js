module.exports = {
    name: 'unmute',
    aliases: ['umute', 'removemute'],
    permissions: ["KICK_MEMBERS"],
    description: "Unmute a member in your server!",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget= message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.guild.channels.cache.get('849850651218411530').send(`<@${memberTarget.user.id}> has been unmuted!`)
        } else{
            message.channel.send('I cant seem to unmute that member. Please re-check your command and try again.');
         }
    }
}