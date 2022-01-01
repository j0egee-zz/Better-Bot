require(`dotenv`).config()

module.exports = {
    name: 'restart',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "Restart the bot",
    async execute(client, message, cmd, args, Discord, profileData) {

        message.channel.send('Restarting...').then(m => {
            client.destroy();
            console.log(`Restarting! Stand by.`)
            setTimeout(function(){
                client.login(process.env.TOKEN);
                console.log(`Bot responsive.`)
                message.channel.send(`Responsive.`)
             }, 10000);
           })
        }
}

