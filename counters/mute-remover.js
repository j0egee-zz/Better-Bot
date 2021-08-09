const { MessageEmbed } = require("discord.js");
const muteSchema = require(`../models/mute-schema`)

module.exports = async (client, profileData) => {
    const guild = client.guilds.cache.get('863154914335522816');
    setInterval(async () => {
        const now = new Date()
        const conditional = {
            expires: {
                $lt: now,
            },
            current: true,
        }
        const results = await muteSchema.find(conditional)
        console.log('Mute results:', results)

        if (results && results.length) {
            for (const result of results) {
                const { guildID, userID, staffID, reason } = result

                const guild = client.guilds.cache.get(guildID)
                const member = (await guild.members.fetch()).get(userID)

                let muteRole = guild.roles.cache.find(role => role.name === 'Muted');
                member.roles.remove(muteRole);

                const eMuteEmbed = new MessageEmbed()
                    .setColor('FADF2E')
                    .setTimestamp(Date.now())
                    .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                    .setTitle(`Mute expired!`)
                    .addField(`User`, `<@${userID}>`)
                    .addField(`Staff`, `<@${staffID}>`)
                    .addField(`Reason`, reason)

                guild.channels.cache.get('863156995201040384').send(eMuteEmbed)

                await muteSchema.updateMany(conditional, {
                    current: false,
                })
            }
        }
    }, 300000);
}
