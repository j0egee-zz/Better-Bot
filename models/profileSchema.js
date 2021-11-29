const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  userTag: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  coins: { type: Number, default: 1000 },
  correctAnswers: { type: Number, require: true, default: 0}
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
