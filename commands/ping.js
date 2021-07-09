module.exports = {
    name: 'ping',
    aliases: ['test'],
    permissions: ["ADMINISTRATOR"],
    description: "This is a ping command!",
    execute(client, message, args, Discord) {

        if (message.member.roles.cache.has('849438809359646751')) {

            message.channel.send('pong!');
        }
        else {
            message.channel.send('You do not have permisions to run this command. If you think this is a mistake, contact your server admin.')
        }

    }

}