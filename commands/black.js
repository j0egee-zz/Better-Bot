module.exports = {
    name: 'black',
    description: "Add the color black role to the server",
    execute(message, args, Discord) {

        if (message.member.roles.cache.has('849438809359646751')) {

            guild.roles.create({ data: { name: 'Color - Black', setColor: ['#000000'] } });
            message.channel.send('Role Color - Black created!')
        }
        else {
            message.channel.send('You do not have permisions to run this command. If you think this is a mistake, contact your server admin.')
        }

    }

}