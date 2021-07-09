module.exports = {
    name: 'purple',
    aliases: ['purpleColor', 'colorPurple'],
    permissions: [],
    description: "Set your own chat color to purple!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const purpleColorRole = message.guild.roles.cache.find(role => role.name === "Color - Purple");

        if(!message.member.roles.cache.has('863161193781788683'))return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else{

            if(!message.member.roles.cache.has('863160849183014912')) return message.guild.members.cache.get(message.author.id).roles.add(purpleColorRole), message.reply('You now have the purple color role.');
            if(message.member.roles.cache.has('863160849183014912')) return message.guild.members.cache.get(message.author.id).roles.remove(purpleColorRole), message.reply('You no longer have the purple color role.');

        }
    }
}