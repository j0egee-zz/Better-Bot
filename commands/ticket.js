module.exports = {
    name: 'ticket',
    aliases: [],
    permissions: [],
    cooldown: 0.5,
    description: 'Creates a ticket!',
    async execute(client, message, cmd, args, Discord, profileData){

const ownerRole = message.guild.roles.cache.find(role => role.name === 'Owner');
const modRole = message.guild.roles.cache.find(role => role.name === 'Moderator');
const adminRole = message.guild.roles.cache.find(role => role.name === 'Admin');
const channel = await message.guild.channels.create(`ticket-${message.author.username}`)

await channel.setParent('849355248413704212');
console.log(channel.parentID);

    channel.updateOverwrite(message.guild.id, {'SEND_MESSAGES': false, 'VIEW_CHANNEL': false});
    channel.updateOverwrite(message.author, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});
    channel.updateOverwrite(ownerRole, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});
    channel.updateOverwrite(modRole, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});
    channel.updateOverwrite(adminRole, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});

    
    channel.send(new Discord.MessageEmbed()
        .setColor('fadf2e')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setDescription(`Hey there <@${message.author.id}>\nThank you for contacting our support team! Please start off by explaining what issue you are having.`)
    )

    const createEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setTitle(`${message.author.username}`)
        .setDescription(`Has created a ticket ${channel}`);

    message.guild.channels.cache.get('860961443393830912').send(createEmbed)

    message.channel.send(new Discord.MessageEmbed()
        .setColor('fadf2e')
        .setTimestamp(Date.now())
        .setAuthor('I made the ticket for you!')
        .setFooter(`Bot created by j0egee#0001`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`<#${channel.id}>`)
    )
    channel.send("Ill let @everyone know that there is a new ticket now.");

}
}