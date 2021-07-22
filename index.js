const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require('dotenv').config();
const mongoose = require('mongoose');

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.on("ready", async () => {
    client.user.setActivity("you | -help | -wiki", { type: "WATCHING" })
    client.channels.cache.get('863156995201040384').send('I am now online!')
})

client.on('guildMemberAdd', guildMember => {

    guildMember.guild.channels.cache.get('863163477854257162').send(`Welcome <@${guildMember.user.id}> to the **AD Center Discord Server**! Please read over <#863155069243228161> :)`)
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect('mongodb+srv://j0egee:BetterBot4Life@better-bot.tbfne.mongodb.net/BetterBotDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database.');
}).catch((err) => {
    console.log(err);
});

client.on("message", async (message, guild, Discord) => {

    const { MessageEmbed } = require('discord.js')

    if (message.channel.type === "dm" && !message.author.bot) {
        const dmEmbed = new MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor(`New DM from ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${message.content}`)

        const DMC = client.channels.cache.get('863156995201040384')
        DMC.send(dmEmbed)
    }
})


client.on('messageUpdate', async (oldMessage, newMessage, Discord) => {
    require('./events/guild/messageUpdate')(oldMessage, newMessage)
})
client.on('messageDelete', async (message, Discord) => {
    require('./events/guild/messageDelete')(message)
})

client.on("guildMemberUpdate", async (oldMember, newMember) => {

    if (oldMember.roles.cache.size > newMember.roles.cache.size) {

        const Embed = new Discord.MessageEmbed();
        Embed.setColor('FADF2E');
        Embed.setTimestamp(Date.now());
        Embed.setTitle(`Member updated!`);
        Embed.setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png");
        Embed.addField(`Member`,`<@${newMember.user.id}>`);

        const fetchedLogs = await oldMember.guild.fetchAuditLogs({
            limit: 1,
            type: 'UPDATED_ROLE',
        });

        const rRoleLog = fetchedLogs.entries.first();

        const { executor } = rRoleLog;

        oldMember.roles.cache.forEach(role => {
            if (!newMember.roles.cache.has(role.id)) {
                Embed.addField("Role Removed", role);
                Embed.addField("Removed by", `<@${executor.id}>`);
            }
        });

        client.channels.cache.get("863156995201040384").send(Embed);
    } else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        const Embed = new Discord.MessageEmbed();
        Embed.setColor('FADF2E');
        Embed.setTitle(`Member updated!`);
        Embed.setTimestamp(Date.now());
        Embed.setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png");
        Embed.addField(`Member`,`<@${newMember.user.id}>`);

        const fetchedLogs = await oldMember.guild.fetchAuditLogs({
            limit: 1,
            type: 'UPDATED_ROLE',
        });

        const aRoleLog = fetchedLogs.entries.first();

        const { executor } = aRoleLog;

        newMember.roles.cache.forEach(role => {
            if (!oldMember.roles.cache.has(role.id)) {
                Embed.addField("Role Added", role);
                Embed.addField("Added by", `<@${executor.id}>`);
            }
        });
        client.channels.cache.get("863156995201040384").send(Embed);
    };

    if (!oldMember.nickname && newMember.nickname) {
        const membernewnicklog = new Discord.MessageEmbed()
            .setAuthor(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL({ format: "png", dynamic: true })}`)
            .setTitle(`Member updated!`)
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .addField("New nickname", newMember.nickname)
        client.channels.cache.get('863156995201040384').send(membernewnicklog);
        return;
    }
    if (oldMember.nickname && !newMember.nickname) {
        const memberremovenicklog = new Discord.MessageEmbed()
            .setAuthor(`${oldMember.user.tag}`, `${oldMember.user.displayAvatarURL({ format: "png", dynamic: true })}`)
            .setTitle(`Member updated!`)
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .addField("Removed nickname", oldMember.nickname)
        client.channels.cache.get('863156995201040384').send(memberremovenicklog);
        return;
    }
    if (oldMember.nickname && newMember.nickname) {
        const memberchangednicklog = new Discord.MessageEmbed()
            .setAuthor(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL({ format: "png", dynamic: true })}`)
            .setTitle(`Member updated!`)
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .addField("Nickname before", oldMember.nickname)
            .addField("Nickname after", newMember.nickname);
        client.channels.cache.get('863156995201040384').send(memberchangednicklog);
        return;
    }
});

client.on('guildMemberRemove', async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_KICK',
    });

    const kickLog = fetchedLogs.entries.first();

    if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);

    const { executor, target, reason } = kickLog;

    let kickEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setTitle('Member kicked!')
        .setAuthor(executor.tag, executor.displayAvatarURL({ dynamic: true }))
        .setDescription(`${member.user.tag} was kicked by ${executor.tag} for ${reason}`);

    if (target.id === member.id) {
        let logs = member.guild.channels.cache.get('863156995201040384')
        logs.send(kickEmbed)
        client.users.cache.get('473850297702285322').send(kickEmbed);;
    } else {
        console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
    }
});


client.on('guildBanAdd', async (guild, user) => {
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_BAN_ADD',
    });

    const banLog = fetchedLogs.entries.first();

    if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

    const { executor, target, reason } = banLog;

    let banEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTimestamp(Date.now())
        .setAuthor(executor.tag, executor.displayAvatarURL({ dynamic: true }))
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setTitle('Member banned!')
        .setDescription(`${user.tag} was banned by ${executor.tag} for ${reason}`);

    if (target.id === user.id) {
        let logs = guild.channels.cache.get('863156995201040384')
        logs.send(banEmbed)
        client.users.cache.get('473850297702285322').send(banEmbed);
    } else {
        console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`);
    }
});


client.login(`ODQ5MzcyNDIzMDY5MjM3Mjg4.YLaNtg.rZYc1vP954en_iwy3T1iaefeeQU`);