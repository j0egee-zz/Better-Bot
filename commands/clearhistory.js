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

        if(!target) return message.reply(`Please say the user.`)

        const muteData = await muteLogs.findOne({ userID: target.id, guildID: message.guild.id })
        const kickData = await kickLogs.findOne({ userID: target.id, guildID: message.guild.id })
        const banData = await banLogs.findOne({ userID: target.id, guildID: message.guild.id })

        if(args[1] === `bans`) {
            if(!banData) return message.channel.send('This user has no ban data.');

            if(banData) {
                await banLogs.findOneAndDelete({ userID: target.id, guildID: message.guild.id }).sort({_id:-1})
                message.reply(`<@${target.id}> most recent ban history has been cleared.`)
            };
        }

        if(args[1] === `kicks`) {
            if(!kickData) return message.channel.send('This user has no kick data.');

            if(kickData) {
                await kickLogs.findOneAndDelete({ userID: target.id, guildID: message.guild.id }).sort({_id:-1})
                message.reply(`<@${target.id}> most recent kick history has been cleared.`)
            };
        }

        if(args[1] === `mutes`) {
            if(!muteData) return message.channel.send('This user has no mute data.');

            if(muteData) {
                await muteLogs.findOneAndDelete({ userID: target.id, guildID: message.guild.id }).sort({_id:-1})
                if(muteData.current === 'true') {
                    const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                    const memberTarget = message.guild.members.cache.get(target.id);
                    memberTarget.roles.remove(muteRole);
                }
                message.reply(`<@${target.id}> must recent mute history has been cleared.`)
            };
        }

        if(args[1] === `all`) {
            if(!muteData) return message.channel.send('This user has no mute data.');
            if(!kickData) return message.channel.send('This user has no kick data.');
            if(!banData) return message.channel.send('This user has no ban data.');

            if(muteData && banData && kickData) {
                await muteLogs.deleteMany({ userID: target.id, guildID: message.guild.id })
                await kickLogs.deleteMany({ userID: target.id, guildID: message.guild.id })
                await banLogs.deleteMany({ userID: target.id, guildID: message.guild.id })

                message.reply(`<@${target.id}> whole history has been cleared.`)
            }

        }

    }
}