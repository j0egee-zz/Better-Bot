const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'userinfo',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    description: "Get the user info for a user in the guild!",
    async execute(client, message, cmd, args, Discord, profileData) {
        if (message.content.startsWith('-userinfo')) {
        var pfpMember = message.mentions.members.first() || message.member;

        const userData = await profileModel.findOne({ userID: pfpMember.id});
    
        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(`Username - ${pfpMember.user.tag}\nNickName - ${pfpMember.nickname}\nUserID - ${pfpMember.user.id}`)
            .setImage(pfpMember.user.displayAvatarURL())
            .setDescription(`Coins: ${userData.coins}\nBank: ${userData.bank}`); 

        message.channel.send(embed);
        message.channel.send(`Here is ${pfpMember}'s user info.`);
        }
    }
}