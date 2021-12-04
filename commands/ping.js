module.exports = {
    name: 'ping',
    aliases: ['uptime'],
    permissions: ["ADMINISTRATOR"],
    description: "This is a ping command!",
    execute(client, message, args, Discord) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        message.channel.send('Stand by.').then(m => {
            m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms. Uptime is ${uptime}`);
          });
        }

}