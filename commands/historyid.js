const muteLogs = require("../models/mute-schema");
const kickLogs = require("../models/kick-schema");
const banLogs = require("../models/ban-schema");

module.exports = {
    name: 'historyid',
    aliases: ['punishmentsid', 'mutesid', 'bansid', 'kicksid'],
    permissions: ['KICK_MEMBERS'],
    description: "Check a members punishment history (By user id)!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = args[0] 
       
        const muteData = await muteLogs.findOne({ userID: target, guildID: message.guild.id })
        const kickData = await kickLogs.findOne({ userID: target, guildID: message.guild.id })
        const banData = await banLogs.findOne({ userID: target, guildID: message.guild.id })

        if (!muteData && !kickData && !banData) return message.channel.send('This user has no punishments.')
        if (muteData && !kickData && !banData) {
            message.channel.send('This user has not been kicked or banned.')
            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(muteData.userTag)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`Staff member:`, muteData.staffTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)
        }
        if (!muteData && kickData && !banData) {
            message.channel.send('This user has not been muted or banned.')
            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(kickData.userTag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`Staff member:`, kickData.staffTag)
                .addField(`Given:`, kickData.date)

            message.channel.send(kickEmbed)
        }
        if (!muteData && !kickData && banData) {
            message.channel.send('This user has not been muted or kicked.')
            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(banData.userTag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`Staff member:`, banData.staffTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }
        if (muteData && kickData && !banData) {
            message.channel.send('This user has not been banned.')
            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(muteData.userTag)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`Staff member:`, muteData.staffTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)

            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(kickData.userTag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`Staff member:`, kickData.staffTag)
                .addField(`Given:`, `<t:${((kickData.date) / 1000).toFixed()}>`)

            message.channel.send(kickEmbed)
        }
        if (muteData && !kickData && banData) {
            message.channel.send('This user has not been kicked.')
            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(`<@${target}>`)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`Staff member:`, muteData.staffTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)

            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(banData.userTag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`Staff member:`, banData.staffTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }
        if (!muteData && kickData && banData) {
            message.channel.send('This user has not been muted.')
            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(kickData.userTag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`Staff member:`, kickData.staffTag)
                .addField(`Given:`, `<t:${((kickData.date) / 1000).toFixed()}>`)

            message.channel.send(kickEmbed)

            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(banData.userTag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`Staff member:`, banData.staffTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }

    }
}