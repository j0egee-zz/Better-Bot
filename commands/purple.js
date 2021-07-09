module.exports = {
    name: 'purple',
    aliases: ['purpleColor', 'colorPurple'],
    permissions: [],
    description: "Set your own chat color to purple!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const purpleColorRole = message.guild.roles.cache.find(role => role.name === "Color - Purple");

        if(!message.member.roles.cache.has('862174821471354890'))return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else{

            if(!message.member.roles.cache.has('849825768002420746')) return message.guild.members.cache.get(message.author.id).roles.add(purpleColorRole), message.reply('You now have the purple color role.');
            if(message.member.roles.cache.has('849825768002420746')) return message.guild.members.cache.get(message.author.id).roles.remove(purpleColorRole), message.reply('You no longer have the purple color role.');

        }
    }
}