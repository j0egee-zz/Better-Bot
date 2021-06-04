module.exports = {
    name: 'rules',
    description: "Sets up a rules list message!",
    async execute(message, args, Discord, client) {
        const channel = '849658278237831208';

        let embed = new Discord.MessageEmbed()
        .setColor('#B8004C')
        .setTitle('Here are the server rules!')
        .setDescription(
        + `Rule 1 - **No racism!**\n`
        + `Rule 2 - **No excessive vulgarity!**\n`
        + `Rule 3 - **Don't post links or images that promote other streamers/cosplayers,\n are pornographic, gore related or of malicious intent!**\n`
        + `Rule 4 - **English only in Chat!**\n`
        + `Rule 5 - **Banter between two people is fine, personally attacking someone is not.\n Respect one another, and everyone's right to privacy!**\n`
        + `Rule 6 - **Keep the Chat and clear of religion and politics!**`
        + `Rule 7 - **Mods reserve the right to take disciplinary action at their discretion \nI trust my mods and it's their word against yours!**`
        + `Rule 8 - **Have fun!**`
        + `Rule 9 - **Do not ask to play with me if you are new to the stream!**`
        + `Rule 10 - **Jokes about mental disorders will result in a ban!**`);
    
}
};