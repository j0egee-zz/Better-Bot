module.exports = {
    name: 'wiki',
    permissions: [],
    cooldown: 0,
    description: "Show all the wiki pages!",
    async execute(client, message, cmd, args, Discord, profileData) {

        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTimestamp(Date.now())
            .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")

        if (!args[0]) return message.channel.send('Please specify one of the wikis you would like to view. \`economy\`, \`tickets\`,\`suggestions\`,\`shop\`,\`colors\`, \`partnership\`, \`application\`or \`mutes\`.');

        const wikipages = [
            "economy",
            "staffeconomy",
            "tickets",
            "stafftickets",
            "suggestions",
            "shop",
            "colors",
            "application",
            "staffapplication",
            "generalstaff",
            "mutes"
        ]

        if (args[0] === 'economy') return message.channel.send(embed
        .setTitle('Economy wiki')
        .setDescription('In this server we use a custom economy system. You can get coins by begging for them, or getting payed by other members. We might also host giveaways for some coins!')
        .addField('\`-bal\`', 'Show your current balance!')
        .addField('\`-beg\`', 'Beg for a random number of coins to get added to your balance!')
        .addField('\`-pay\`', 'Pay another member of the server a certian amount of coins!')
        .addField('\`-shop\`', 'Show all the ways to spend your coins!')
        .addField('\`-guessthenumber\`', 'Play a game to win coins!')
        )

        if (args[0] === 'staffeconomy') return message.channel.send(embed
            .setTitle('Staff economy wiki')
            .setDescription('Not all staff members will have permissions to use all of these commands! But these are the staff commands having to do with economy!')
            .addField('\`-give\`', 'Give a user a certian amount of coins!')
            .addField('\`-set\`', 'Set a users coin balance!')
            .addField('\`-createdata\`', 'Create user data if a user does not have a balance set up!')
        )

        if (args[0] === 'tickets') return message.channel.send(embed
            .setTitle('Ticket wiki')
            .setDescription('If you ever need to have a private conversation with staff, a ticket is the way to go!')
            .addField('\`-ticket\`', 'Instally create a channel in the server for you and the staff team!')
        )

        if (args[0] === 'stafftickets') return message.channel.send(embed
            .setTitle('Staff ticket wiki')
            .setDescription('When a member creates a ticket you will have access to view that ticket. Members can not see the ticket. The ticket owner can not close the ticket after it has been opened.')
            .addField('\`-delticket\`', 'Close any open ticket!')
        )

        if (args[0] === 'suggestions') return message.channel.send(embed
            .setTitle('Suggestions wiki')
            .setDescription('You can create a suggestion for the discord server to vote on!')
            .addField('\`-suggest\`', 'Send what ever your suggestion is to a suggestion channel where all members can vote on it!')
        )

        if (args[0] === 'shop') return message.channel.send(embed
            .setTitle('Shop wiki')
            .setDescription('In this server you can use your coins to buy perks!')
            .addField('\`-shop\`', 'Show you the basic shop page! List all the perks able to be bought and there price!')
        )

        if (args[0] === 'colors') return message.channel.send(embed
            .setTitle('Colors wiki')
            .setDescription('You can buy a color perk! With this you get the ability to change the color of you name in this server!')
            .addField('\`-color\`', 'Show you the basic color page! This has a list of all the colors and you can see how they look!')
        )

        if (args[0] === 'partnership') return message.channel.send(embed
            .setTitle('Partnership wiki')
            .setDescription('On this server you can buy partnership! What this means is you will get a rank for proof of purchase, you contact @j0egee#0001 directly to set up your ad. You have to have an ad for our server in your own, and your ad will get sent to the private channel!')
            .addField('\`-buyPartnership\`', 'If you have enough coins, buy the partnership rank for your ad!')
        )

        if (args[0] === 'application') return message.channel.send(embed
            .setTitle('Applications wiki')
            .setDescription('When you apply for the staff team you do it through our bot! I will PM you a series of questions and the staff team will vote of you, then I will PM youback with the results!')
            .addField('\`-apply\`', 'Start the staff application process in a direct message with me!')
        )

        if (args[0] === 'staffapplication') return message.channel.send(embed
            .setTitle('Staff application wiki')
            .setDescription('When a staff application comes in you get to vote of all of them! Admins will have permission to accept or reject, but they can not do so without leadership approval! An admin will train this new staff memeber!')
            .addField('\`-accept\`', 'Accept someones staff application! This will DM them asking to join a VC for training so be ready before sending this command!')
            .addField('\`-decline\`', 'Decline someones staff application! This will also tell them that they can re-apply in 30 days!')
        )

        if (args[0] === 'generalstaff') return message.channel.send(embed
            .setTitle('General staff wiki')
            .setDescription('This is just the basic staff help wiki! Not all staff members will be able to use all of these commands! But these are all the avaliable ones!')
            .addField('\`-bc\`', 'Broadcast a message in a embed to any channel!')
            .addField('\`-clear\`', 'Clear a certian amount of messages in the channel!')
            .addField('\`-dm\`', 'Direct message a user in the server from the bot! (Only works if the user is accepting DM\'s)')
            .addField('\`-giveaway\`', 'Start a giveaway in the current channel! (Time must be in MS)')
            .addField('\`-mute\`', 'Temp or perma mute a member in the server! (Example of tempmutes: 1d = 1 day; 1m = 1 minute)')
            .addField('\`-say\`', 'Send a normal (not embed) message to any channel!')
            .addField('\`-unmute\`', 'Remove any mute from a user in the server!')
            .addField('\`-userinfo\`', 'Get a user infomation page! (Only way to see a users balance!)')
        )
        if (args[0] === 'mutes') return message.channel.send(embed
            .setTitle('Mutes wiki')
            .setDescription('One of the punishments for breaking a rule in this server will be a mute. For your first mute the length will be listed, and for every mute after that it increates by how ever many muted you have. Example: First mute = 2 hours; Second mute = 4 hours; Third mute = 6 hours.')
            .addField('Spam', '2 hours')
            .addField('Wrong channel', 'One hour')
            .addField('NSFW content', '5 hours')
            .addField('Disrespectful', '2 hours')
            .addField('Other language (Non English)', 'One hour')
            .addField('Against Discord ToS', '3 hours')
        )


        if(args[0] !== wikipages) return message.channel.send(`There is no such wiki called \`${args[0]}\`. Use \`-wiki\` to view all the avaliable wiki's.`);
        }
}