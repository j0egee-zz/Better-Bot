const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'userinfo',
    aliases: [],  
    permissions: ["KICK_MEMBERS"],
    description: "Get the user info for a user in the guild!",
    async execute(client, message, cmd, args, Discord, profileData) {
        if (message.content.startsWith('-userinfo')) {
            var pfpMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            const userData = await profileModel.findOne({ userID: pfpMember.id, serverID: message.guild.id });

            if (!userData) return message.channel.send('An error has occured. This user is most likely not in my system yet. Please use the \`-createdata\` command!');

            const pfpMemberRoles = pfpMember.roles.cache
                .map((role) => role.toString());

            const embed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setImage(pfpMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Username`, `${pfpMember.user.tag}`, true)
                .addField(`NickName`, `${pfpMember.nickname}`, true)
                .addField(`UserID`, `${pfpMember.user.id}`, true)
                .addField(`Coins`,  userData.coins)
                .addField(`Joined on`, `<t:${(pfpMember.joinedAt.valueOf() /1000).toFixed()}:f> (<t:${(pfpMember.joinedAt.valueOf() /1000).toFixed()}:R>)`)
                .addField(`Created on`, `<t:${(pfpMember.user.createdAt.valueOf() /1000).toFixed()}:f> (<t:${(pfpMember.user.createdAt.valueOf() /1000).toFixed()}:R>)`)
                .addField(`Roles`, `${pfpMemberRoles}`);
                

            message.channel.send(embed);
            message.channel.send(`Here is ${pfpMember}'s user info.`);
        }
    }
}