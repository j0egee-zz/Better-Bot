module.exports = {
    name: 'decline',
    aliases: [],
    permissions: ['BAN_MEMBERS'],
    description: "Decline a members application.",
    execute(client, message, cmd, args, Discord, profileData) {

        if (message.channel.id !== '865835829632172082') return message.channel.send('This command can only be done through the <#865835829632172082> channel.');

        const target = message.mentions.members.first();

        if(!target) return message.reply(`Be sure to say the memebr you want to accept.`);

        const ogChannel = message.guild.channels.cache.find(c => c.name === 'applications');
        const appChannel = ogChannel.threads.cache.find(x => x.name === `${target.id}`);

        message.channel.send(`<@${target.id}> has been declined by <@${message.author.id}>!`);

        target.user.send(`Hi there. I am here to infome you that your application has been declined by our staff team. If you wish you can always re-apply again in another 30 days.`);
        message.delete()

        appChannel.setName(`DECLINED ${target.id}`)
        appChannel.delete()
    }
}