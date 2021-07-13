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

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        }); message.reply(`The last **${args[0]} messages** have been cleared!`)
    }
}