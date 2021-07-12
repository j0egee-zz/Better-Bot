module.exports = async (client, message, cmd, args, Discord, profileData) => {
    const guild = client.guilds.cache.get('845366607080456262');
    setInterval(() => {
        const memberCount = guild.memberCount
        const channel = guild.channels.cache.get('850089517783580702');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating member count. ${memberCount.toLocaleString()} members in the guild`);
    }, 10000);
}