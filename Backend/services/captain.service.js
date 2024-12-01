const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { captainModel } = require("../models/captain.model");

const createCaptain = async ({ fullname, email, password, color, model, plate, capacity, vehicle }) => {
  const existingUser = await captainModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await captainModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword,
    vehicle: {
      color,
      model,
      plate,
      capacity,
      vehicleType: vehicle,
    },
  });

  return user;
};

module.exports = {
  createCaptain
};

