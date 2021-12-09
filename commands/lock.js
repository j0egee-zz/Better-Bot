module.exports = {
    name: 'lock',
    aliases: [],
    permissions: ["MANAGE_MESSAGES"],
    description: 'Lock a channel in the server!',
    async execute(client, message, cmd, args, Discord, profileData) {

            await message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false });
                

            message.channel.send(`🚨 This channel has been locked by <@${message.author.id}>! 🚨`);

            message.channel.setTopic(`🚨🚨 This channel is currently under an emergency lock! 🚨🚨`)

        }
    }