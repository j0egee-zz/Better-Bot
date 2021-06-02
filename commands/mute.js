module.exports = {
    name: 'mute',
    description: "Mute a member in your server!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        } else{
            message.channel.send('I cant seem to mute that member. Please re-check your command and try again.');
         }
    }
}