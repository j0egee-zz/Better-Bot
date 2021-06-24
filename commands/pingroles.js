module.exports = {
    name: 'pingroles',
    aliases: ['proles', 'roles', 'pr'],
    permissions: ["ADMINISTRATOR"],
    description: "Set up reaction roles for ping noticications!",
    async execute(client, message, cmd, args, Discord, profileData) {
    if (message.member.id != "473850297702285322") return message.channel.send(`To prevent errors, contact Joe before running this command.`);
        const channel = '849824394640359424';

        const suggestionPings = message.guild.roles.cache.find(role => role.name === "Suggestion - Pings");
        const serverUpdatePings = message.guild.roles.cache.find(role => role.name === "Server updates - Pings");
        const pollPings = message.guild.roles.cache.find(role => role.name === "Poll - Pings");
        const minecraftPings = message.guild.roles.cache.find(role => role.name === "Minecraft - Pings");

        const suggestionEmojie = '📫'
        const serverUpdateEmojie = '🔔'
        const pollEmojie = '🗳️'
        const minecraftEmojie = '🎮'

        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(`Bot created by j0egee#0001`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Choose a pings you want to recieve!')
        .setDescription('\n*Remove your reaction to remove the role.*\n\n'
            + `${suggestionEmojie} for ${suggestionPings}!\n`
            + `${serverUpdateEmojie} for ${serverUpdatePings}!\n`
            + `${pollEmojie} for ${pollPings}!\n`
            + `${minecraftEmojie} for ${minecraftPings}!\n`);


    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(suggestionEmojie);
    messageEmbed.react(serverUpdateEmojie);
    messageEmbed.react(pollEmojie);
    messageEmbed.react(minecraftEmojie);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {

            if (reaction.emoji.name === suggestionEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(suggestionPings);
            }
            if (reaction.emoji.name === serverUpdateEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(serverUpdatePings);
            }
            if (reaction.emoji.name === pollEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(pollPings);
            }
            if (reaction.emoji.name === minecraftEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftPings);
            }
        } else {
            return;
        
        }
    });

    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            
            if (reaction.emoji.name === suggestionEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(suggestionPings);
            }
            if (reaction.emoji.name === serverUpdateEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(serverUpdatePings);
            }
            if (reaction.emoji.name === pollEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(pollPings);
            }
            if (reaction.emoji.name === minecraftEmojie) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftPings);
            }
        } else {
            return;
        }
    });

    }
}