module.exports = {
    name: 'yellow',
    aliases: ['yellowColor', 'colorYellow'],
    permissions: [],
    description: "Set your own chat color to yellow!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const yellowColorRole = message.guild.roles.cache.find(role => role.name === "Color - Yellow");

        if(!message.member.roles.cache.has('863161193781788683'))return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else{

            if(!message.member.roles.cache.has('863160909194854461')) return message.guild.members.cache.get(message.author.id).roles.add(yellowColorRole), message.reply('You now have the yellow color role.');
            if(message.member.roles.cache.has('863160909194854461')) return message.guild.members.cache.get(message.author.id).roles.remove(yellowColorRole), message.reply('You no longer have the yellow color role.');

        }
    }
}