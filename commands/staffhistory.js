const muteLogs = require("../models/mute-schema");
const kickLogs = require("../models/kick-schema");
const banLogs = require("../models/ban-schema");


module.exports = {
    name: 'staffhistory',
    aliases: ['shistory'],
    permissions: [],
    description: "Check a staff members punishments",
    async execute(client, message, cmd, args, Discord, profileData) {

        let staff = message.mentions.users.first();

        const muteData = await muteLogs.findOne({ staffID: staff.id, guildID: message.guild.id }).sort({_id:-1})
        const kickData = await kickLogs.findOne({ staffID: staff.id, guildID: message.guild.id }).sort({_id:-1})
        const banData = await banLogs.findOne({ staffID: staff.id, guildID: message.guild.id }).sort({_id:-1})

        if (!muteData && !kickData && !banData) return message.channel.send('This user has given no punishments.')
        if (muteData && !kickData && !banData) {
            message.channel.send('This user has not given a kicked or banned.')
            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`User:`, muteData.userTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)
        }
        if (!muteData && kickData && !banData) {
            message.channel.send('This user has not given a muted or banned.')
            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`User:`, kickData.userTag)
                .addField(`Given:`, `<t:${((kickData.date) / 1000).toFixed()}>`)

            message.channel.send(kickEmbed)
        }
        if (!muteData && !kickData && banData) {
            message.channel.send('This user has not given a muted or kicked.')
            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`User:`, banData.userTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }
        if (muteData && kickData && !banData) {
            message.channel.send('This user has not given a banned.')
            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`User:`, muteData.userTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)

            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`User:`, kickData.userTag)
                .addField(`Given:`, `<t:${((kickData.date) / 1000).toFixed()}>`)

            message.channel.send(kickEmbed)
        }
        if (muteData && !kickData && banData) {
            message.channel.send('This user has not given a kicked.')
            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`User:`, muteData.userTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)

            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`User:`, banData.userTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }
        if (!muteData && kickData && banData) {
            message.channel.send('This user has not given a muted.')
            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`User:`, kickData.userTag)
                .addField(`Given:`, `<t:${((kickData.date) / 1000).toFixed()}>`)

            message.channel.send(kickEmbed)

            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`User:`, banData.userTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }

        if (muteData && kickData && banData) {

            const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Mute history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, muteData.reason)
                .addField(`User:`, muteData.userTag)
                .addField(`Current:`, muteData.current)
                .addField(`Expires:`, `<t:${((muteData.expires) / 1000).toFixed()}>`)
                .addField(`Given:`, `<t:${((muteData.date) / 1000).toFixed()}>`)

            message.channel.send(muteEmbed)

            const kickEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Kick history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, kickData.reason)
                .addField(`User:`, kickData.userTag)
                .addField(`Given:`, `<t:${((kickData.date) / 1000).toFixed()}>`)

            message.channel.send(kickEmbed)

            const banEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setAuthor(staff.tag)
                .setTitle(`Ban history`)
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .addField(`Reason:`, banData.reason)
                .addField(`User:`, banData.userTag)
                .addField(`Current:`, banData.current)
                .addField(`Given:`, `<t:${((banData.date) / 1000).toFixed()}>`)

            message.channel.send(banEmbed)
        }
    }
}

