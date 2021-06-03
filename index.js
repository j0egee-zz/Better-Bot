const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Logged in as Better Bot#8742!');
});

client.on('guildMemberAdd', guildMember =>{

        guildMember.guild.channels.cache.get('849819656000897045').send(`Welcome <@${guildMember.user.id}> to the **Better Bot support server**! Please read over <#849658278237831208> :)`)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'invite') {
        client.commands.get('invite').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }
});

client.login('ODQ5MzcyNDIzMDY5MjM3Mjg4.YLaNtg.IOwLfOP6FSJyQrZCoU0wLCH-u8U');