module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args) {

        if (message.member.roles.cache.has('533913942632693771', '533913565485203457')) {

            message.channel.send('pong!');
        }
        else {
            message.channel.send('You do not have permisions to run this command. If you think this is a mistake, contact your server admin.')
        }

    }

}