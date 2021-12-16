const answerSchema = require("../models/answer-schema");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'checkanswer',
    permissions: [],
    cooldown: 0.1,
    description: "Check a answer to a case from the DB.",
    async execute(client, message, cmd, args, Discord, profileData) {
        let caseNum = args[0];
        let answer = args [1];

        let data = await answerSchema.findOne({ caseNumb: caseNum });

        if(!data) return message.reply(`Invalaid case number.`);

        if(data.answer === answer) {
            message.delete

            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id
            }, {
                $inc: {
                    correctAnswers: 1,
                },
            }
            );

            message.reply(`Correct! Ill add one point to your account, you now got ${userData.correctAnswers} correct!`)
        }
    }
}