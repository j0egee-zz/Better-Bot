module.exports = {
    name: 'lock',
    aliases: [],
    permissions: ["MANAGE_MESSAGES"],
    description: 'Lock a channel in the server!',
    execute(client, message, cmd, args, Discord, profileData) {

            message.channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['SEND_MESSAGES']
                }
            ]);

            message.channel.send(`🚨 This channel has been locked by <@${message.author.id}>! 🚨`);

            message.channel.setTopic(`🚨🚨 This channel is currently under an emergency lock! 🚨🚨`)

        }
    }