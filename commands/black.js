module.exports = {
    name: 'black',
    aliases: ['blackColor', 'colorBlack'],
    permissions: [],
    description: "Set your own chat color to black!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const blackColorRole = message.guild.roles.cache.find(role => role.name === "Color - Black");

        if (!message.member.roles.cache.has('863161193781788683')) return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else {

            if (!message.member.roles.cache.has('863160783097430027')) return message.guild.members.cache.get(message.author.id).roles.add(blackColorRole), message.reply('You now have the black color role.');
            if (message.member.roles.cache.has('863160783097430027')) return message.guild.members.cache.get(message.author.id).roles.remove(blackColorRole), message.reply('You no longer have the black color role.');

        }
    }
}