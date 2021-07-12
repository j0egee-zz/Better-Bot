const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'set',
    permissions: ["ADMINISTRATOR"],
    cooldown: 0.1,
    description: "Set a users balance",
    async execute(client, message, cmd, args, Discord, profileData) {
        if (!args.length) return message.channel.send('You need to mention a user in this guild.');
        const amount = args[1]
        const target = message.mentions.users.first();
        if (!target) return message.channel.sent('The user you mentioned is not in this guild.');

        if (amount % 1 != 0 || amount < 0) return message.channel.send('The set amount must be a whole number.');

        try {
            const targetData = await profileModel.findOne({ userID: target.id, serverID: message.guild.id });
            if (!targetData) return message.channel.send(`That user doesn't have any data. Please use \`-createdata <user>\``);

            await profileModel.findOneAndUpdate({
                userID: target.id,
                serverID: message.guild.id
            }, {
                $set: {
                    coins: amount,
                },
            }
            );

            return message.channel.send(`${target} new balance is **${amount} coins**. It used to be *${targetData.coins} coins*.`)
        } catch (err) {
            console.log(err)
        }
    },
};