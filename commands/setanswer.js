const answerSchema = require("../models/answer-schema");

module.exports = {
    name: 'setanswer',
    permissions: ["ADMINISTRATOR"],
    cooldown: 0.1,
    description: "Set a answer to a case in the DB.",
    async execute(client, message, cmd, args, Discord, profileData) {
        let caseNum = args[0];
        let answer = args [1];

        let data = await answerSchema.findOne({ caseNumb: caseNum });

        if(data) return message.reply('This case number already has a answer saved.')
        else {
            let profile = await answerSchema.create({
                caseNumb: caseNum,
                answer: answer,
            });
            profile.save();
            message.channel.send(`Data saved! Case number ${caseNum} correct answer is ||${answer}||.`);
        }
    }
}