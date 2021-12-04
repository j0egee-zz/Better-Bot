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
                client.login('ODQ5MzcyNDIzMDY5MjM3Mjg4.YLaNtg.rZYc1vP954en_iwy3T1iaefeeQU');
                console.log(`Bot responsive.`)
                message.channel.send(`Responsive.`)
             }, 10000);
           })
        }
}

