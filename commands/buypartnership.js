const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'buypartnership',
    permissions: [],
    cooldown: 0.1,
    description: "Buy a partnership ad.",
    async execute(client, message, cmd, args, Discord, profileData) {
        let userData = await profileModel.findOne({ userID: message.author.id, serverID: message.guild.id })
        const user = message.author
        const partnerRole = message.guild.roles.cache.find(role => role.name === "Partner");

        if (message.member.roles.cache.has('864337595009990687')) return message.channel.send('You already bought this.')

        if (userData.coins < 100000) return message.channel.send('You do not have enough coins to buy this.')
        else {
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id
            }, {
                $set: {
                    coins: userData.coins - 100000,
                },
            }
            );
            await message.guild.members.cache.get(user.id).roles.add(partnerRole)
            message.channel.send('You have auccessfully bought partneship for 100,000 coins! Contact <@473850297702285322> to hear the rules and claim your ad.')
            client.users.cache.get('473850297702285322').send(`${user.tag} has bought partnership!`)
        }
    }
}