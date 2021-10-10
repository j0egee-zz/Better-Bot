module.exports = {
    name: 'ticket',
    aliases: [],
    permissions: [],
    cooldown: 0.05,
    description: 'Creates a ticket!',
    async execute(client, message, cmd, args, Discord, profileData) {

        if (message.member.roles.cache.has('866922287072673812')) return message.reply('You are banned from making tickets in this server!');

        const firstChannel = message.guild.channels.cache.find(channels => channels.name === `ticket-${message.author.username}`);

        if(firstChannel) return message.reply(`You can only have 1 ticket opened at a time. You currently have <#${firstChannel.id}> opened.`)

        let reason = message.content.split('-ticket ').join("");

        if(!args[0]) return message.reply('Please be sure to include your reason for creating the ticket.');

        const ownerRole = message.guild.roles.cache.find(role => role.name === 'Owner');
        const modRole = message.guild.roles.cache.find(role => role.name === 'Moderator');
        const adminRole = message.guild.roles.cache.find(role => role.name === 'Admin');
        const channel = await message.guild.channels.create(`ticket-${message.author.username}`)

        await channel.setParent('863160325868093440');

        channel.updateOverwrite(message.guild.id, { 'SEND_MESSAGES': false, 'VIEW_CHANNEL': false });
        channel.updateOverwrite(message.author, { 'SEND_MESSAGES': true, 'VIEW_CHANNEL': true });
        channel.updateOverwrite(ownerRole, { 'SEND_MESSAGES': true, 'VIEW_CHANNEL': true });
        channel.updateOverwrite(modRole, { 'SEND_MESSAGES': true, 'VIEW_CHANNEL': true });
        channel.updateOverwrite(adminRole, { 'SEND_MESSAGES': true, 'VIEW_CHANNEL': true });


        channel.send(new Discord.MessageEmbed()
            .setColor('fadf2e')
            .setAuthor(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setDescription(`Thank you for contacting our support team!\n\n**Reason: "${reason}"**\n\nPlease use this time to explain anything you feel important, and someone will be with you shortly.`)
        )

        message.delete();

        const createEmbed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setTitle(`${message.author.username}`)
            .setDescription(`Has created a ticket ${channel}\n\n**${reason}**`);

        message.guild.channels.cache.get('863157013567373332').send(createEmbed)

        message.channel.send(new Discord.MessageEmbed()
            .setColor('fadf2e')
            .setTimestamp(Date.now())
            .setAuthor('I made the ticket for you!')
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setDescription(`<#${channel.id}>`)
        )
        channel.send("Ill let @everyone know that there is a new ticket now.");

    }
}