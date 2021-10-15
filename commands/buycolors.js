const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'buycolors',
    permissions: [],
    cooldown: 0.1,
    description: "Buy access to change your server color.",
    async execute(client, message, cmd, args, Discord, profileData) {

        if(message.member.roles.cache.has('898604884528603136')) return message.reply('You are blocked from this servers economy.');
        
        let userData = await profileModel.findOne({ userID: message.author.id, serverID: message.guild.id })
        const user = message.author
        const colorRole = message.guild.roles.cache.find(role => role.name === "Colors Permitted");

        if (message.member.roles.cache.has('863161193781788683')) return message.channel.send('You already bought this.')

        if (userData.coins < 50000) return message.channel.send('You do not have enough coins to buy this.')
        else {
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id
            }, {
                $set: {
                    coins: userData.coins - 50000,
                },
            }
            );
            await message.guild.members.cache.get(user.id).roles.add(colorRole)
            message.channel.send('You have bought access to change your server color for 50,000 coins! Use \`-colors\` to enable your own chat color.')
        }
    }
}