module.exports = {
    name: 'white',
    aliases: ['whiteColor', 'colorWhite'],
    permissions: [],
    description: "Set your own chat color to white!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const whiteColorRole = message.guild.roles.cache.find(role => role.name === "Color - White");

        if(!message.member.roles.cache.has('863161193781788683'))return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else{

            if(!message.member.roles.cache.has('863161047581720576')) return message.guild.members.cache.get(message.author.id).roles.add(whiteColorRole), message.reply('You now have the white color role.');
            if(message.member.roles.cache.has('863161047581720576')) return message.guild.members.cache.get(message.author.id).roles.remove(whiteColorRole), message.reply('You no longer have the white color role.');

        }
    }
}