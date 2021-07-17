const prefix = '-'
const ms = require('ms')

module.exports = {
    name: "giveaway",
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: "Start a giveaway!",
    async execute(client, message, cmd, args, Discord, profileData) {
        let timeVal = message.content.slice(prefix.length + 9)
        if (!timeVal) return message.channel.send('You must say a time **in MS**!')
        let time = parseInt(timeVal, 10)
        if (time < 15000) {
           return message.channel.send('Time needs to be longer then 15 sec!')
        }
        let prize = message.content.split(`${time}`).join("").split(`${prefix}giveaway  `).join("")
        if (!prize) return message.channel.send(`You must say the prize of the giveaway!`)
        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
            .setAuthor(`Giveaway host: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('New giveaway!')
            .setDescription(`**${prize}**\n\n*This giveaway is ${ms(time)} long!*`);

            let msg = await message.channel.send(embed)
            await msg.react('🎉')
            function winner(msg){
                let winner = msg.reactions.cache.get('🎉').users.cache.filter(u=> !u.bot).random().id
                return winner
            };
            function reactions(msg){
                return msg.reactions.cache.size
            }
            setTimeout(() =>{
                    if(reactions(msg) <= 3)return message.channel.send('I can not host a giveaway if there are less then 3 participants!')
                    message.channel.send(`The winer of **"${prize}"** is <@${winner(msg)}>! Please contact <@${message.author.id}> for your prize!`)
            }, time);
    }
}