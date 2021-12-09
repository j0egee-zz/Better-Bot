const muteSchema = require('../models/mute-schema')

module.exports = {
    name: 'mute',
    aliases: ['tempmute', 'timeout'],
    permissions: ["KICK_MEMBERS"],
    description: "Mute a member in your server!",
    async execute(client, message, cmd, args, Discord, profileData) {
        const reasons = {
            SPAM: 2,
            WRONG_CHANNEL: 1,
            NSFW_CONTENT: 5,
            DISRESPECTFULL: 2,
            OTHER_LANGUAGE: 1,
            DISCORD_TOS: 3,
        }
        const staff = message.author;

        const target = message.mentions.users.first()

        if (!target) {
            message.reply('Please specify someone to mute')
            return
        }

        if (!args[1]) {
            let validReasons = ''
            for (const key in reasons) {
                validReasons += `\`${key}\`, `
            }
            validReasons = validReasons.substr(0, validReasons.length - 2)
            message.reply(
                `Please use one of the following reasons: ${validReasons}`)
            return
        }

        const reason = args[1].toUpperCase()
        if (!reasons[reason]) {
            let validReasons = ''
            for (const key in reasons) {
                validReasons += `\`${key}\`, `
            }
            validReasons = validReasons.substr(0, validReasons.length - 2)
            message.reply(
                `Unknown reason, please use one of the following: ${validReasons}`)
            return
        }
        const previousMutes = await muteSchema.find({
            userID: target.id,
        })

        const currentlyMuted = previousMutes.filter((mute) => {
            return mute.current === true
        })

        if (currentlyMuted.length) {
            message.reply('That user is already muted')
            return
        }
        let duration = reasons[reason] * (previousMutes.length + 1)

        const expires = new Date()
        expires.setHours(expires.getHours() + duration)

        const mutedRole = message.guild.roles.cache.find((role) => {
            return role.name === 'Muted'
        })
        if (!mutedRole) {
            message.reply('Could not find a "Muted" role')
            return
        }
        const targetMember = (await message.guild.members.fetch()).get(target.id)
        targetMember.roles.add(mutedRole)

        await new muteSchema({
            userID: target.id,
            userTag: target.tag,
            guildID: message.guild.id,
            reason,
            staffID: staff.id,
            staffTag: staff.tag,
            expires,
            current: true,
        }).save()

        message.reply(
            `You muted <@${target.id}> for "${reason}". They will be unmuted in ${duration} hours.`
        )
        const muteEmbed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('New mute!')
            .addField(`User`, `<@${target.id}>`)
            .addField(`Staff member`, `<@${staff.id}>`)
            .addField(`Reason`, reason)
            .addField(`Expires`, `${duration} hour(s)`)


        message.guild.channels.cache.get('863156995201040384').send({embeds: [muteEmbed]});
        client.users.cache.get('473850297702285322').send({embeds: [muteEmbed]});
        target.send(`You have been muted in *${message.guild.name}* by **${staff.tag}**.\nMute reason: **${reason}**\nMute duration: **${duration} hour(s)**`)
    }
}