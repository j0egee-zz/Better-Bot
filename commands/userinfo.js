const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'userinfo',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    description: "Get the user info for a user in the guild!",
    async execute(client, message, cmd, args, Discord, profileData) {
        if (message.content.startsWith('-userinfo')) {
        var pfpMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        
        const userData = await profileModel.findOne({ userID: pfpMember.id}, {serverID: message.guild.id});

        if(!userData)return message.channel.send('An error has occured. This user is most likely not in my system yet. Please use the \`-createdata\` command!');
        
        const pfpMemberRoles = pfpMember.roles.cache
        .filter((roles) => roles.id !== message.guild.id)
        .map((role) => role.toString());

        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor(`Username - ${pfpMember.user.tag}\n\nNickName - ${pfpMember.nickname}\n\nUserID - ${pfpMember.user.id}`)
            .setImage(pfpMember.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Coins - ${userData.coins}\n\n`
            + `Joined on - ${pfpMember.joinedAt.toLocaleDateString()}, ${pfpMember.joinedAt.toLocaleTimeString()}\n\n`
            + `Created on - ${pfpMember.user.createdAt.toLocaleDateString()}, ${pfpMember.user.createdAt.toLocaleTimeString()}\n\n`
            + `Roles - ${pfpMemberRoles}`);

        message.channel.send(embed);
        message.channel.send(`Here is ${pfpMember}'s user info.`);
        }
    }
}