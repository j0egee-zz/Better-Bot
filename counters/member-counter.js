module.exports = async (client) =>{
    const guild = client.guilds.cache.get('845366607080456262');
    setInterval(() =>{
        const memberCount = guild.memberCount
        const channel = guild.channels.cache.get('850089517783580702');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log('Updating member count');
    }, 600000);
}