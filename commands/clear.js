module.exports = {
    name: "clear",
    aliases: [],
    permissions: ['MANAGE_MESSAGES'],
    cooldown: 0,
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord, profileData) {

        if(!args[0]) return message.reply('You must say a whole number grater then 0.')
        if(isNaN(args[0])) return message.reply('You must say a whole number grater then 0.')

        if(args[0] <= 0) return message.reply('You must say a whole number grater then 0.')
        if(args[0] > 100) return message.reply('I am not allowed to delete more then 100 messages at a time.')
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        }); message.channel.send(`The last **${args[0]} messages** have been cleared!`)
    }
}