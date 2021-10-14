const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true
}

const banSchema = mongoose.Schema({
    userID: reqString,
    userTag: reqString,
    reason: reqString,
    staffID: reqString,
    staffTag: reqString,
    guildID: reqString,
    current: reqString,
    date: { type: Date, default: Date.now }
    
})

module.exports = mongoose.model(`bans`, banSchema);