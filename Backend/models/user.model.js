const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fullnameSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 characters"],
  },
  lastname: {
    type: String,
    minlength: [3, "Last name must be at least 3 characters"],
  },
});

const userSchema = new mongoose.Schema({
  fullname: {
    type: fullnameSchema,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
});

// Instance methods
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static methods
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

module.exports.userModel = mongoose.model("user", userSchema);
