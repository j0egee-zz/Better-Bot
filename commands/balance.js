module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    execute(client, message, cmd, args, Discord, profileData) {
      message.reply(`Your current wallet balance is *${profileData.coins} coins*, and you bank balance is *${profileData.bank} coins*.`);
    },
  };