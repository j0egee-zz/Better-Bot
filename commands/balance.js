module.exports = {
    name: 'balance',
    aliases: ['bal', 'coins', 'money'],
    permissions: [],
    cooldown: 0.1,
    description: "Check your coin balance!",
    execute(client, message, args, Discord, profileData){
        message.channel.send(`${message.author.username}, your current balance is *${profileData.coins}*, your bank balance is *${profileData.bank}*!`);
    }
}
