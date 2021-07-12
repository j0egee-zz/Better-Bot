module.exports = {
    name: 'red',
    aliases: ['redColor', 'colorRed'],
    permissions: [],
    description: "Set your own chat color to red!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const redColorRole = message.guild.roles.cache.find(role => role.name === "Color - Red");

        if (!message.member.roles.cache.has('863161193781788683')) return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else {

            if (!message.member.roles.cache.has('849825895262584892')) return message.guild.members.cache.get(message.author.id).roles.add(redColorRole), message.reply('You now have the red color role.');
            if (message.member.roles.cache.has('849825895262584892')) return message.guild.members.cache.get(message.author.id).roles.remove(redColorRole), message.reply('You no longer have the red color role.');

        }
    }
}