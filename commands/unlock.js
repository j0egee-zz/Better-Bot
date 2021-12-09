module.exports = {
    name: 'unlock',
    aliases: [],
    permissions: ["MANAGE_MESSAGES"],
    description: 'Unlock a channel in the server!',
    async execute(client, message, cmd, args, Discord, profileData) {

        await message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true });

            message.channel.send(`This channel is now unlocked!`);

            message.channel.setTopic(` `)

        }
    }