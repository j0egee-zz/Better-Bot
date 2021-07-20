module.exports = {
    name: 'accept',
    aliases: [],
    permissions: ['BAN_MEMBERS'],
    description: "Accept a members application.",
    execute(client, message, cmd, args, Discord, profileData) {

        if (message.channel.id !== '865835829632172082') return message.channel.send('This command can only be done through the <#865835829632172082> channel.');

        const target = message.mentions.members.first();

        message.channel.send(`<@${target.id}> has been accepted by <@${message.author.id}>!`);

        target.user.send(`Congratulations! Your staff application has been accepted by ${message.author.username}. He is our guide to becoming a staff member, <link here>. If you are avaliable please make your way into the general voice channel and someone will drag you up! If you are not avaliable to VC now please contact ${message.author.tag} and it can get rearanged to another time.`);
        message.delete()

    }
}