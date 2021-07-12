module.exports = {
    name: 'color',
    aliases: ['setcolor', 'chatcolor', 'colur', 'colors'],
    permissions: [],
    description: "Set your own chat color!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const blackColorRole = message.guild.roles.cache.find(role => role.name === "Color - Black");
        const redColorRole = message.guild.roles.cache.find(role => role.name === "Color - Red");
        const yellowColorRole = message.guild.roles.cache.find(role => role.name === "Color - Yellow");
        const greenColorRole = message.guild.roles.cache.find(role => role.name === "Color - Green");
        const purpleColorRole = message.guild.roles.cache.find(role => role.name === "Color - Purple");
        const whiteColorRole = message.guild.roles.cache.find(role => role.name === "Color - White");

        if (!message.member.roles.cache.has('863161193781788683')) return message.channel.send('You must buy access to colors first. Use \`-shop\`.');
        else {

            const colorEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(`To enable your own chat color just run the color as a command\nExample "-red". And re-run that command to remove your color.`)
                .addField(`Black`, blackColorRole)
                .addField(`Red`, redColorRole)
                .addField(`Yellow`, yellowColorRole)
                .addField(`Green`, greenColorRole)
                .addField(`Purple`, purpleColorRole)
                .addField(`White`, whiteColorRole)


            message.channel.send(colorEmbed);

        }
    }
}