const mongoose = require("mongoose");


const configSchema = mongoose.Schema({
    prefix: { type: String, required: true, default: "-" },
    logChannel: { type: String, required: true, dafault: "863156995201040384" },
    ticketLogs: { type: String, required: true, default: "863157013567373332" },
    ticketCategory: { type: String, required: true, default: "863160325868093440" },
    welcomeChannel: { type: String, required: true, default: "863163477854257162" },
    guildID: { type: String, required: true, unique: true, default: "863154914335522816" }

})

module.exports = mongoose.model(`configs`, muteSchema);