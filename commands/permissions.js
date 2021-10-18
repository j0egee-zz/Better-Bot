module.exports = {
    name: "permissions",
    aliases: ['perms'],
    permissions: ['BAN_MEMBERS'],
    cooldown: 0,
    description: "Check/Edit soemones perms.",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = message.mentions.members.first();

        const ticketRole = message.guild.roles.cache.find(role => role.name === 'Ticket Banned');
        const suggestionRole = message.guild.roles.cache.find(role => role.name === 'Suggestion Banned');
        const economyRole = message.guild.roles.cache.find(role => role.name === 'Economy Blacklist');
        const emojiRole = message.guild.roles.cache.find(role => role.name === 'Emoji Blocked');
        

        if (args[1] === 'info') {
            if (args[2] === 'tickets') {
                if (target.roles.cache.has('866922287072673812')) {
                    message.reply('This user is blocked from making tickets.')
                } else {
                    message.reply('This user is not blocked from making tickets.')
                }
            }
            if (args[2] === 'suggestions') {
                if (target.roles.cache.has('866922320324329472')) {
                    message.reply('This user is blocked from making suggestions.')
                } else {
                    message.reply('This user is not blocked from making suggestions.')
                }
            }
            if (args[2] === 'economy') {
                if (target.roles.cache.has('898604884528603136')) {
                    message.reply('This user is blocked from the server economy.')
                } else {
                    message.reply('This user is not blocked from the server economy.')
                }
            }
            if (args[2] === 'emoji') {
                if (target.roles.cache.has('899394022932635659')) {
                    message.reply('This user is blocked from sending emojis/stickers.')
                } else {
                    message.reply('This user is not blocked from sending emojis/stickers.')
                }
            }
        }
        if(args[1] === 'remove') {
            if(args[2] === 'tickets') {
                if(target.roles.cache.has('866922287072673812')) {
                    message.reply('This user is already blocked from making tickets.')
                } else {
                target.roles.add(ticketRole);
                message.reply('This user can no longer make tickets.')
                }
            }
            if(args[2] === 'suggestions') {
                if(target.roles.cache.has('866922320324329472')) {
                    message.reply('This user is already blocked from making suggestions')
                } else {
                target.roles.add(suggestionRole);
                message.reply('This user can no longer make suggestions.')
                }
            }
            if(args[2] === 'economy') {
                if(target.roles.cache.has('898604884528603136')) {
                    message.reply('This user is already blocked from the server economy.')
                } else {
                target.roles.add(economyRole);
                message.reply('This user can no longer use the server economy.')
                }
            }
            if(args[2] === 'emoji') {
                if(target.roles.cache.has('899394022932635659')) {
                    message.reply('This user is already blocked from sending emojis/stickers.')
                } else {
                target.roles.add(emojiRole);
                message.reply('This user can no longer send emojis/stickers.')
                }
            }
        }
        if(args[1] === 'add') {
            if(args[2] === 'tickets') {
                if(!target.roles.cache.has('866922287072673812')) {
                    message.reply('This user is not blocked from making tickets.')
                } else {
                target.roles.remove(ticketRole);
                message.reply('This user can now make tickets.')
                }
            }
            if(args[2] === 'suggestions') {
                if(!target.roles.cache.has('866922320324329472')) {
                    message.reply('This user is not blocked from making suggestions')
                } else {
                target.roles.remove(suggestionRole);
                message.reply('This user can now make suggestions.')
                }
            }
            if(args[2] === 'economy') {
                if(!target.roles.cache.has('898604884528603136')) {
                    message.reply('This user is not blocked from the server economy.')
                } else {
                target.roles.remove(economyRole);
                message.reply('This user can now use the server economy.')
                }
            }
            if(args[2] === 'emoji') {
                if(!target.roles.cache.has('899394022932635659')) {
                    message.reply('This user is not blocked from sending emojis/stickers.')
                } else {
                target.roles.remove(emojiRole);
                message.reply('This user can now send emojis/stickers.')
                }
            }
        }
            
    }
}