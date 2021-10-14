const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true
}

const muteSchema = mongoose.Schema({
    userID: reqString,
    userTag: reqString,
    reason: reqString,
    staffID: reqString,
    staffTag: reqString,
    guildID: reqString,
    date: { type: Date, default: Date.now },
    expires: {
        type: Date,
        required: true
    },
    current: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model(`mutes`, muteSchema);