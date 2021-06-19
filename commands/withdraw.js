const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'withdraw',
    permissions: [],
    cooldown: 0.1,
    description: "Withdraw coins from your bank!",
    async execute(client, message, args, Discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Withdraw amount must be a whole number grater then 0.');
        try{
            if(amount > profileData.bank) return message.channel.send('You do not have enough coins to withdraw from your bank. Check your `-bal`');
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                },
            }
        );
        return message.channel.send(`**${amount} coins** have been withdrawn from your bank!`);
    } catch(err){
        console.log(err)
    }
},
};