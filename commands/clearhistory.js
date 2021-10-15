const muteLogs = require("../models/mute-schema");
const kickLogs = require("../models/kick-schema");
const banLogs = require("../models/ban-schema");

module.exports = {
    name: 'clearhistory',
    aliases: [ ],
    permissions: ['ADMINISTRATOR'],
    description: "Check a members punishment history!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = message.mentions.users.first();

        const muteData = await muteLogs.findOne({ userID: target.id, guildID: message.guild.id })
        const kickData = await kickLogs.findOne({ userID: target.id, guildID: message.guild.id })
        const banData = await banLogs.findOne({ userID: target.id, guildID: message.guild.id })

        if(args[1] === `bans`) {
            if(!banData) return message.channel.send('This user has no ban data.');

            if(banData) {
                await banLogs.deleteOne({ userID: target.id, guildID: message.guild.id })
                message.reply(`<@${target.id}> ban history has been cleared.`)
            };
        }

        if(args[1] === `kicks`) {
            if(!kickData) return message.channel.send('This user has no kick data.');

            if(kickData) {
                await kickLogs.deleteOne({ userID: target.id, guildID: message.guild.id })
                message.reply(`<@${target.id}> kick history has been cleared.`)
            };
        }

        if(args[1] === `mutes`) {
            if(!muteData) return message.channel.send('This user has no mute data.');

            if(muteData) {
                await muteLogs.deleteOne({ userID: target.id, guildID: message.guild.id })
                message.reply(`<@${target.id}> mute history has been cleared.`)
            };
        }

        if(args[1] === `all`) {
            if(!muteData) return message.channel.send('This user has no mute data.');
            if(!kickData) return message.channel.send('This user has no kick data.');
            if(!banData) return message.channel.send('This user has no ban data.');

            if(kickData && banData && muteData) {
                await muteLogs.deleteOne({ userID: target.id, guildID: message.guild.id })
                await kickLogs.deleteOne({ userID: target.id, guildID: message.guild.id })
                await banLogs.deleteOne({ userID: target.id, guildID: message.guild.id })

                message.reply(`<@${target.id}> entire history has been cleared.`)
            }

        }

    }
}