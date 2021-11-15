module.exports = {
    name: "permissions",
    aliases: [`perms`, `perm`],
    permissions: [`BAN_MEMBERS`],
    cooldown: 0,
    description: "Check/Edit soemones perms.",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = message.mentions.members.first();
        if (!target) return message.channel.send(`Be sure to mention the user.`);

        if (target.hasPermission('BAN_MEMBERS')) return message.reply('You can not manage permissions of admins.')

        if (!args[1]) return message.channel.send(`Please use the correct arguments. Options:\`info\`, \`add\`, or \`remove\``);
        if (args[1] !== `info`) {
            if (args[1] !== `add`) {
                if (args[1] !== `remove`) {
                    message.channel.send(`Please use the correct arguments. Options:\`info\`, \`add\`, or \`remove\``);
                }
            }
        }
        if (!args[2]) return message.channel.send(`Please use the correct arguments. Options:\`tickets\`, \`apply\`, \`suggestions\`,\`economy\`, or \`emoji\``);
        if (args[2] !== `tickets`) {
            if (args[2] !== `apply`) {
                if (args[2] !== `suggestions`) {
                    if (args[2] !== `economy`) {
                        if (args[2] !== `bot`) {
                            if (args[2] !== `emoji`) {
                                message.channel.send(`Please use the correct arguments. Options:\`tickets\`, \`apply\`, \`suggestions\`,\`economy\`, \`bot\`, or \`emoji\``);
                            }
                        }
                    }
                }
            }
        }

        const ticketRole = message.guild.roles.cache.find(role => role.name === `Ticket Banned`);
        const suggestionRole = message.guild.roles.cache.find(role => role.name === `Suggestion Banned`);
        const economyRole = message.guild.roles.cache.find(role => role.name === `Economy Blacklist`);
        const emojiRole = message.guild.roles.cache.find(role => role.name === `Emoji Blocked`);
        const applyRole = message.guild.roles.cache.find(role => role.name === `Application Blocked`);
        const botRole = message.guild.roles.cache.find(role => role.name === `Bot Blocked`);

        if (args[1] === `info`) {
            if (args[2] === `tickets`) {
                if (target.roles.cache.has(`866922287072673812`)) {
                    message.reply(`<@${target.id}> is blocked from making tickets.`)
                } else {
                    message.reply(`<@${target.id}> is not blocked from making tickets.`)
                }
            }
            if (args[2] === `apply`) {
                if (target.roles.cache.has(`904930227237572688`)) {
                    message.reply(`<@${target.id}> is blocked from applying.`)
                } else {
                    message.reply(`<@${target.id}> is not blocked applying.`)
                }
            }
            if (args[2] === `suggestions`) {
                if (target.roles.cache.has(`866922320324329472`)) {
                    message.reply(`<@${target.id}> is blocked from making suggestions.`)
                } else {
                    message.reply(`<@${target.id}> is not blocked from making suggestions.`)
                }
            }
            if (args[2] === `economy`) {
                if (target.roles.cache.has(`898604884528603136`)) {
                    message.reply(`<@${target.id}> is blocked from the server economy.`)
                } else {
                    message.reply(`<@${target.id}> is not blocked from the server economy.`)
                }
            }
            if (args[2] === `emoji`) {
                if (target.roles.cache.has(`899394022932635659`)) {
                    message.reply(`<@${target.id}> is blocked from sending emojis/stickers.`)
                } else {
                    message.reply(`<@${target.id}> is not blocked from sending emojis/stickers.`)
                }
            }
            if (args[2] === `bot`) {
                if (target.roles.cache.has(`906366152505171978`)) {
                    message.reply(`<@${target.id}> is blocked from using the bot.`)
                } else {
                    message.reply(`<@${target.id}> is not blocked from using the bot.`)
                }
            }
        }
        if (args[1] === `remove`) {
            if (args[2] === `tickets`) {
                if (target.roles.cache.has(`866922287072673812`)) {
                    message.reply(`<@${target.id}> is already blocked from making tickets.`)
                } else {
                    target.roles.add(ticketRole);
                    message.reply(`<@${target.id}> can no longer make tickets.`)
                }
            }
            if (args[2] === `apply`) {
                if (target.roles.cache.has(`904930227237572688`)) {
                    message.reply(`<@${target.id}> is already blocked from applying.`)
                } else {
                    target.roles.add(applyRole);
                    message.reply(`<@${target.id}> can no longer apply.`)
                }
            }
            if (args[2] === `suggestions`) {
                if (target.roles.cache.has(`866922320324329472`)) {
                    message.reply(`<@${target.id}> is already blocked from making suggestions`)
                } else {
                    target.roles.add(suggestionRole);
                    message.reply(`<@${target.id}> can no longer make suggestions.`)
                }
            }
            if (args[2] === `economy`) {
                if (target.roles.cache.has(`898604884528603136`)) {
                    message.reply(`<@${target.id}> is already blocked from the server economy.`)
                } else {
                    target.roles.add(economyRole);
                    message.reply(`<@${target.id}> can no longer use the server economy.`)
                }
            }
            if (args[2] === `emoji`) {
                if (target.roles.cache.has(`899394022932635659`)) {
                    message.reply(`<@${target.id}> is already blocked from sending emojis/stickers.`)
                } else {
                    target.roles.add(emojiRole);
                    message.reply(`<@${target.id}> can no longer send emojis/stickers.`)
                }
            }
            if (args[2] === `bot`) {
                if (target.roles.cache.has(`906366152505171978`)) {
                    message.reply(`<@${target.id}> is already blocked from using the bot.`)
                } else {
                    target.roles.add(botRole);
                    message.reply(`<@${target.id}> can no longer use the bot.`)
                }
            }
        }
        if (args[1] === `add`) {
            if (args[2] === `tickets`) {
                if (!target.roles.cache.has(`866922287072673812`)) {
                    message.reply(`<@${target.id}> is not blocked from making tickets.`)
                } else {
                    target.roles.remove(ticketRole);
                    message.reply(`<@${target.id}> can now make tickets.`)
                }
            }
            if (args[2] === `apply`) {
                if (!target.roles.cache.has(`904930227237572688`)) {
                    message.reply(`<@${target.id}> is not blocked from applying.`)
                } else {
                    target.roles.remove(applyRole);
                    message.reply(`<@${target.id}> can now apply.`)
                }
            }
            if (args[2] === `suggestions`) {
                if (!target.roles.cache.has(`866922320324329472`)) {
                    message.reply(`<@${target.id}> is not blocked from making suggestions`)
                } else {
                    target.roles.remove(suggestionRole);
                    message.reply(`<@${target.id}> can now make suggestions.`)
                }
            }
            if (args[2] === `economy`) {
                if (!target.roles.cache.has(`898604884528603136`)) {
                    message.reply(`<@${target.id}> is not blocked from the server economy.`)
                } else {
                    target.roles.remove(economyRole);
                    message.reply(`<@${target.id}> can now use the server economy.`)
                }
            }
            if (args[2] === `emoji`) {
                if (!target.roles.cache.has(`899394022932635659`)) {
                    message.reply(`<@${target.id}> is not blocked from sending emojis/stickers.`)
                } else {
                    target.roles.remove(emojiRole);
                    message.reply(`<@${target.id}> can now send emojis/stickers.`)
                }
            }
            if (args[2] === `bot`) {
                if (!target.roles.cache.has(`906366152505171978`)) {
                    message.reply(`<@${target.id}> is not blocked from using the bot.`)
                } else {
                    target.roles.remove(botRole);
                    message.reply(`<@${target.id}> can now use the bot.`)
                }
            }
        }
    }
}