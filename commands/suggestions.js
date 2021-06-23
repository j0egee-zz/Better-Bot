module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'sug', 'suggestion'],
    permissions: [],
    cooldown: 1,
    description: 'Creates a suggestion!',
    execute(client, message, cmd, args, Discord, profileData){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

       message.guild.channels.cache.get('854884262130352138').send(embed).then((msg) =>{
                   msg.react('👍');
                   msg.react('👎');
                   message.delete();
               }).catch((err)=>{
                   throw err;
               });
        return message.reply('I sent your suggestion to <#854884262130352138>!')
    }
}