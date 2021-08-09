module.exports = async (client) => {
    const guild = client.guilds.cache.get('863154914335522816');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('873959663236948019');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating member count. ${memberCount.toLocaleString()} members in the guild`);
    }, 120000);
}