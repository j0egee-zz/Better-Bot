module.exports = {
    name: 'infosetup',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    description: 'Send a message to a channel in the server!',
    execute(client, message, cmd, args, Discord, profileData) {

        const embed = new Discord.MessageEmbed()
            .setTitle('Welcome to the AD Center discord server!')
            .setTimestamp(Date.now())
            .setDescription(`In this server you can send your own ad's for new discord servers, a discord bot, or anything else.\nJust follow these rules and you will be all good.\n\n`
                + `**Rule 1 -** Be nice to all members!\n**Rule 2 -** Do not spam!!\n**Rule 3 -** Use the appropriate channel when sending any message!\n**Rule 4 -** Keep all content PG-13!\n**Rule 5 -** Follow Discord ToS!\n**Rule 6 -** English only!\n\n`
                + `If you have any questions or problems feel free to ping myself or any other staff member, or make a ticket.\n\n[Offical Discord link](https://discord.gg/paVctwJM3R)`)
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setColor('FADF2E')

        message.channel.send({embeds: [embed]});
    }
}