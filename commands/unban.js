const banSchema = require('../models/ban-schema')

module.exports = {
    name: 'unban',
    aliases: [],
    permissions: ["BAN_MEMBERS"],
    description: "Un-ban a member in your server!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = args[0];
        const staff = message.author;

        if (!target) return message.reply('Please say what user you want to ban.');

        const targetData = await banSchema.findOne({ userID: target, guildID: message.guild.id, current: true });
        if (!targetData) return message.channel.send(`This user is not banned`);

        await banSchema.updateMany(targetData, {
            current: false,
          })

          message.guild.members.unban(target);

    }
}
