module.exports = {
    name: 'accept',
    aliases: [],
    permissions: ['BAN_MEMBERS'],
    description: "Accept a members application.",
    execute(client, message, cmd, args, Discord, profileData) {

        if (message.channel.id !== '865835829632172082') return message.channel.send('This command can only be done through the <#865835829632172082> channel.');

        const target = message.mentions.members.first();

        if(!target) return message.reply(`Be sure to say the memebr you want to accept.`);

        message.channel.send(`<@${target.id}> has been accepted by <@${message.author.id}>!`);

        target.user.send(`Congratulations! Your staff application has been accepted by ${message.author.tag}. Please send them a PM to set a time to meet and train.`);
        message.delete()

    }
}