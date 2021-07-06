const profileModel = require("../models/profileSchema");

module.exports = {
    name: "createdata",
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: "Manually create data for a user in the guild.",
    async execute(client, message, cmd, args, Discord, profileData) {

        var target = message.mentions.members.first();

        if(!target)return message.channel.send('You must mention a user in this guild. **Warning! Do not create an account for a user that already has one! Check \`-userinfo\` to confirm!**');


        let userData = await profileModel.findOne({ userID: target.id});

        if(userData)return message.channel.send(`${target} already has data.`);
        else{

        let profile = await profileModel.create({
            userID: target.id,
            serverID: message.guild.id,
            coins: 1000,
          });
          profile.save();
          message.channel.send(`${target} now has data in my system!`)
    }
}
}