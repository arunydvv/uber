
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

const vehicleSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
    minlength: [3, "Color must be at least 3 characters"],
  },
  plate: {
    type: String,
    required: true,
    minlength: [7, "Plate must be at least 7 characters"],
  },
  capacity: {
    type: Number,
    required: true,
    min: [1, "Capacity must be at least 1"]
  },
  vehicleType: {
    type: String,
    required: true,
    enum: ['car', 'bike', 'auto']
  },
  location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number
    }
  }
});

const captainSchema = new mongoose.Schema({
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
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  vehicle: {
    type: vehicleSchema,
    required: true,
  },
});

// Instance methods
captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static methods
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

module.exports.captainModel = mongoose.model("captainModel", captainSchema);


