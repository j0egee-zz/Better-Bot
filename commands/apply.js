module.exports = {
    name: 'apply',
    aliases: [],
    cooldown: 0.1,
    permissions: [],
    description: "Apply for the staff team!!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const target = message.author

        const ogChannel = message.guild.channels.cache.find(c => c.name === 'applications');
        const oldApp = ogChannel.threads.cache.find(x => x.name === `${target.id}`)

        if(oldApp) return message.channel.send(`You already have a pending application.`)

        if (message.member.roles.cache.has('904930227237572688')) return message.reply('You are blocked from applying for staff on this server.');

        message.reply('Ill start the application process in a DM. If you are not accepting DM from members in this server, please enable that now and try again.');
        message.author.send(`**Welcome to your application for staff on the AD Center server! Lets get started!**`);

        const questions = [
            "How old are you?",
            "How long have you been the the AD Center discord server for?",
            "What time zone are you in?",
            "Tell us about yourself.",
            "Why do you want to become a staff member?",
            "Have you ever staffed before? If so, what was the server called?",
            "Why should be chose you over other applicant?",
            "What position are you interested in? (Moderator - Watch over chat and inforce rules; Writer - Create and contribute to forms)"
        ];

        let collectCounter = 0;
        let endCounter = 0;

        const filter = (m) => m.author.id === message.author.id && !m.author.bot;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(channel, filter);

        collector.on("collect", () => {
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++]);
            } else {
                channel.send('**Your application has successfully been sent! You will hear back from me soon! So make sure you are still accepting DM\`s from me!**')
                collector.stop("fulfilled");
            }
        });

        const appChannel = client.channels.cache.get('865835829632172082');

        collector.on('end', (collected, reason) => {
            if (reason === 'fulfilled') {
                let index = 1;
                const mappedResponces = collected.map((msg) => {
                    return `**${index++}) ${questions[endCounter++]}**\n-> *${msg.content}*`
                }).join(`\n\n`);

                const appEmbed = new Discord.MessageEmbed()
                    .setColor('FADF2E')
                    .setTimestamp(Date.now())
                    .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle('New Application!')
                    .setDescription(mappedResponces)

                appChannel.send({ embeds: [appEmbed] })

                    .then(async function (message) {
                        message.react("👍")
                        message.react("👎")

                        const thread = await message.startThread({
                            name: `${target.id}`,
                            autoArchiveDuration: 60,
                            reason: 'New staff application',
                        })
                        thread.send(`<@&863160410097057793> <@&863160446025859072> <@&915619114293264384>`)

                    }


            ,)
            }
        }

        )
    }
}
