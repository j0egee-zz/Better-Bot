const ms = require('ms');

module.exports = {
    name: 'mute',
    aliases: ['tempmute', 'timeout'],
    permissions: ["KICK_MEMBERS"],
    description: "Mute a member in your server!",
    execute(client, message, cmd, args, Discord, profileData) {
        const target = message.mentions.users.first();


        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);

                const muteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('New mute!')
                .setDescription(`<@${message.author.id}> has muted <@${memberTarget.user.id}>!\nThis mute will not expire!`);

                memberTarget.guild.channels.cache.get('863156995201040384').send(muteEmbed);
                client.users.cache.get('473850297702285322').send(muteEmbed);
                client.users.cache.get(memberTarget.id).send(`You have been muted in *${message.guild.name}* by *${message.author.tag}*. This mute will not be automaticly removed.`);
                message.delete()
                return
            }
            memberTarget.roles.add(muteRole.id);

            const tMuteEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('New mute!')
                .setDescription(`<@${message.author.id}> has muted <@${memberTarget.user.id}>!\nThe mute is ${ms(ms(args[1]))} long!\nIt will expire on <t:${((Date.now() + ms(args[1])) /1000).toFixed()}:f>`);

            memberTarget.guild.channels.cache.get('863156995201040384').send(tMuteEmbed)
            client.users.cache.get('473850297702285322').send(tMuteEmbed)
            client.users.cache.get(memberTarget.id).send(`You got muted in *${message.guild.name}* by *${message.author.tag}*. This mute will automaticly get removed on <t:${((Date.now() + ms(args[1])) /1000).toFixed()}:f> (<t:${((Date.now() + ms(args[1])) /1000).toFixed()}:R>).`)

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);

                const overEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Mute expire!')
                .setDescription(`<@${memberTarget.user.id}>'s timed mute has now ended!\nOriginally muted by <@${message.author.id}>!`);

                memberTarget.guild.channels.cache.get('863156995201040384').send(overEmbed)
                client.users.cache.get('473850297702285322').send(overEmbed)
                client.users.cache.get(memberTarget.id).send(`Your mute in *${message.guild.name}* has now expired.`)
            }, ms(args[1]));


        } else {
            message.channel.send('I cant seem to mute that member. Please re-check your command and try again.');

        }
        message.delete()
    }
}