const mongoose = require("mongoose");

const blackListCaptainTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "1d",
  },
});

module.exports = mongoose.model("BlackListTokenCaptain", blackListCaptainTokenSchema);