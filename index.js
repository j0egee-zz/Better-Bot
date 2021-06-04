const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require('dotenv').config();

const prefix = '-';

const fs = require('fs');

const memberCounter = require('./counters/member-counter')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Logged in as Better Bot#8742!');
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Viewers');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('533927316825440266').send(`Welcome <@${guildMember.user.id}> to the **Marco"s Lounge**! Please read over <#533918266951729162> :)`)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'mute') {
        if (message.member.hasPermission('KICK_MEMBERS')) {
        client.commands.get('mute').execute(message, args);
        }
    } else if (command === 'unmute') {
        if (message.member.hasPermission('KICK_MEMBERS')) {
        client.commands.get('unmute').execute(message, args);
        }
    } else if (command === 'colorrole') {
        client.commands.get('colorrole').execute(message, args, Discord, client);
    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    }
});

client.login('ODQ5MzcyNDIzMDY5MjM3Mjg4.YLaNtg.IOwLfOP6FSJyQrZCoU0wLCH-u8U');