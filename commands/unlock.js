module.exports = {
    name: 'unlock',
    aliases: [],
    permissions: ["MANAGE_MESSAGES"],
    description: 'Unlock a channel in the server!',
    execute(client, message, cmd, args, Discord, profileData) {

            message.channel.overwritePermissions([
                {
                    id: message.guild.id,
                    allow: ['SEND_MESSAGES']
                }
            ]);

            message.channel.send(`This channel is now unlocked!`);

            message.channel.setTopic(` `)

        }
    }