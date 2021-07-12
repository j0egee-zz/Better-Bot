module.exports = {
    name: 'green',
    aliases: ['greenColor', 'colorGreen'],
    permissions: [],
    description: "Set your own chat color to green!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const greenColorRole = message.guild.roles.cache.find(role => role.name === "Color - Green");

        if (!message.member.roles.cache.has('863161193781788683')) return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else {

            if (!message.member.roles.cache.has('863160959426494514')) return message.guild.members.cache.get(message.author.id).roles.add(greenColorRole), message.reply('You now have the green color role.');
            if (message.member.roles.cache.has('863160959426494514')) return message.guild.members.cache.get(message.author.id).roles.remove(greenColorRole), message.reply('You no longer have the green color role.');

        }
    }
}