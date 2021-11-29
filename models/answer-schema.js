const mongoose = require("mongoose");

const reqNum = {
    type: String,
    required: true,
    unique: true
}

const answerSchema = mongoose.Schema({
    caseNumb: reqNum,
    answer: reqNum,
    
})

module.exports = mongoose.model(`answers`, answerSchema);