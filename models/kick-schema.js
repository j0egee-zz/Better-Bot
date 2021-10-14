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
    guildID: reqString,
    date: { type: Date, default: Date.now }
    
})

module.exports = mongoose.model(`kicks`, kickSchema);