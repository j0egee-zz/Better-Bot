const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'beg',
    permissions: [],
    cooldown: 60,
    description: "Beg for coins!",
    async execute(client, message, args, Discord, profileData) {
        
        if(message.member.roles.cache.has('898604884528603136')) return message.reply('You are blocked from this servers economy.');

        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
            serverID: message.guild.id
        }, {
            $inc: {
                coins: randomNumber,
            }
        }
        );
        return message.reply(`You begged and recived **${randomNumber.toLocaleString()} coins**!`);
    },
};