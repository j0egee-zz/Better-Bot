const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require('dotenv').config();
const mongoose = require('mongoose');

const fs = require('fs');

const memberCounter = require('./counters/member-counter')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


client.on('guildMemberAdd', guildMember => {

    guildMember.guild.channels.cache.get('849819656000897045').send(`Welcome <@${guildMember.user.id}> to the **Better Bot Support Server**! Please read over <#849658278237831208> :)`)
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect('mongodb+srv://j0egee:BetterBot4Life@better-bot.tbfne.mongodb.net/BetterBotDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUndifiedTopolody: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected to the database.');
}).catch((err) => {
    console.lot(err);
});

client.login('ODQ5MzcyNDIzMDY5MjM3Mjg4.YLaNtg.-Vx1wzHZAfHTaMfgaQGzHXeC2L4');