const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true
}

const kickSchema = mongoose.Schema({
    userID: reqString,
    userTag: reqString,
    reason: reqString,
    staffID: reqString,
    staffTag: reqString,
    guildID: reqString
})

module.exports = mongoose.model(`kicks`, kickSchema);