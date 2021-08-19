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


            const joinUnix = (pfpMember.joinedAt.valueOf() / 1000).toFixed();
            const createUnix = (pfpMember.user.createdAt.valueOf() / 1000).toFixed();
             const messageUnix = (pfpMember.lastMessage.createdAt.valueOf() / 1000).toFixed();

            const embed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setThumbnail(pfpMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Username`, `${pfpMember.user.tag}`, true)
                .addField(`NickName`, `${pfpMember.nickname}`, true)
                .addField(`UserID`, `${pfpMember.user.id}`, true)
                .addField(`Coins`, userData.coins.toLocaleString())
                .addField(`Joined on`, `<t:${joinUnix}:f> (<t:${joinUnix}:R>)`)
                .addField(`Created on`, `<t:${createUnix}:f> (<t:${createUnix}:R>)`)
                .addField(`Roles`, `${pfpMemberRoles}`)
                .addField(`Last message date`, `<t:${messageUnix}:f> (<t:${messageUnix}:R>)`)
                .addField(`Last message content`, `\`\`\`${pfpMember.lastMessage}\`\`\``)


            message.channel.send(embed);
            message.channel.send(`Here is ${pfpMember}'s user info.`);
        }
    }
}