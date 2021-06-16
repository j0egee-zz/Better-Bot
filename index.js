const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require('dotenv').config();

const fs = require('fs');

const memberCounter = require('./counters/member-counter')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.on('guildMemberAdd', guildMember => {

    guildMember.guild.channels.cache.get('849819656000897045').send(`Welcome <@${guildMember.user.id}> to the **Marco"s Lounge**! Please read over <#533918266951729162> :)`)
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODQ5MzcyNDIzMDY5MjM3Mjg4.YLaNtg.IOwLfOP6FSJyQrZCoU0wLCH-u8U');