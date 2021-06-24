module.exports = {
    name: 'ticket',
    aliases: [],
    permissions: [],
    cooldown: 1,
    description: 'Creates a ticket!',
    async execute(client, message, cmd, args, Discord, profileData){

const ownerRole = message.guild.roles.cache.find(role => role.name === 'Owner');
const modRole = message.guild.roles.cache.find(role => role.name === 'Moderator');
const adminRole = message.guild.roles.cache.find(role => role.name === 'Admin');
const channel = await message.guild.channels.create(`ticket-${message.author.username}`)

await channel.setParent('849355248413704212');
console.log(channel.parentID);

    channel.updateOverwrite(message.guild.id, {SEND_MESSAGES: false, 'VIEW_CHANNEL': false});
    channel.updateOverwrite(message.author, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});
    channel.updateOverwrite(ownerRole, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});
    channel.updateOverwrite(modRole, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});
    channel.updateOverwrite(adminRole, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true});

    
    channel.send(new Discord.MessageEmbed()
        .setColor('fadf2e')
        .setAuthor(`Bot created by j0egee#0001`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Hey there <@${message.author.id}>\nThank you for contacting our support team! Please start off by explaining what issue you are having.`)
    )

    message.channel.send(new Discord.MessageEmbed()
        .setColor('fadf2e')
        .setAuthor('I made the ticket for you!')
        .setDescription(`<#${channel.id}>`)
    )
    const reactionMessage = await channel.send("Ill let @everyone know that there is a new ticket now.");

    try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("KICK_MEMBERS"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("Deleting this channel in 5 seconds!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
    });
    message.channel 
    setTimeout(() => message.delete(), 3000);
}
}