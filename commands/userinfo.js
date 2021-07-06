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

        if(!userData)return message.channel.send('An error has occured. This user is most likely not in my system yet. Contect the bot developor to get this user manually added.')

        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setAuthor(`Username - ${pfpMember.user.tag}\nNickName - ${pfpMember.nickname}\nUserID - ${pfpMember.user.id}`)
            .setImage(pfpMember.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Coins - ${userData.coins}\nJoined on - ${pfpMember.joinedAt}\nCreated on - ${pfpMember.user.createdAt}`)
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png");

        message.channel.send(embed);
        message.channel.send(`Here is ${pfpMember}'s user info.`);
        }
    }
}