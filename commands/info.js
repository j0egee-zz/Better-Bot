module.exports = {
    name: 'info',
    aliases: ['about'],
    cooldown: 0.2,
    permissions: [],
    description: "Get a info page",
    async execute(client, message, cmd, args, Discord, profileData) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;


        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())

            .addField(`Bot Author`, `j0egee#0001`)
            .addField(`Bot ID`, `849372423069237288`)
            .addField(`Bot Version`, `Beta 2`)
            .addField(`Bot Uptime`, uptime)
            .addField(`Language`, `JS`)
            .addField(`Discord.JS`, `12.5.3`)
            .addField(`Bot Prefix`, `-`)
            .addField(`Bot Age`, `<t:${((client.user.createdAt.valueOf().toFixed())/ 1000).toFixed()}:F>`)
            .addField(`Server Age`, `<t:${((message.guild.createdAt.valueOf().toFixed())/ 1000).toFixed()}:F>`)
            .addField(`Server ID`, message.guild.id)
            .addField(`Server Members`, message.guild.memberCount)


        message.channel.send(embed)

    }
}