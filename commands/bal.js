module.exports = {
    name: 'bal',
    permissions: [],
    cooldown: 0.1,
    description: "Check your coin balance!",
    execute(client, message, args, Discord, profileData){
        message.channel.send(`Your current balance is *${profileData.coins}*, your bank balance is *${profileData.bank}*!`);
    }
}
