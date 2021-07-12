const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: 'play',
    permissions: [],
    cooldown: 0,
    aliases: ["p"],
    description: 'Joins and plays music.',
    async execute(client, message, cmd, args, Discord, profileData) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('You need to be in a channel to use this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have permissions to play music in this voice channel.');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have permissions to play music in this voice channel.');
        if (!args.length) return message.channel.send('You need to send the song name!');
 
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            const embed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTimestamp(Date.now())
                .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`Now playing`)
                .setDescription(`${video.title} in ${voiceChannel}!`)
                .setImage(video.thumbnail);
 
            await message.channel.send(embed)
        } else {
            message.channel.send('No video results found');
        }
    }
}
 