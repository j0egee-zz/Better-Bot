const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true
}

const banSchema = mongoose.Schema({
    userID: reqString,
    reason: reqString,
    staffID: reqString,
    staffTag: reqString,
    guildID: reqString,
    current: reqString
})

module.exports = mongoose.model(`bans`, banSchema);