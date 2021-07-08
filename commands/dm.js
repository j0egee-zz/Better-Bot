module.exports = {
    name: 'dm',
    aliases: ['message', 'botdm'],
    permissions: ["ADMINISTRATOR"],
    description: "Direct message anyone in the server from the bot!",
    async execute(client, message, cmd, args, Discord, profileData) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user)return message.channel.send('You must mention a user in this guild, or say there user id!');
        if(!args.slice(1).join(" ")) return message.channel.send('You must say the message.');
        
        //user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send('That user is not allowing DMs!')).then(() => message.channel.send(`DM has been sent to ${user.user.tag}`))
        user.user.send(args.slice(1).join(" ")).then(() => message.channel.send(`DM has been sent to ${user.user.tag}`)).catch(() => message.channel.send(`${user.user.tag} is not accepting DM's.`))
    }
}