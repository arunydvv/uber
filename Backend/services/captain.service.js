const bcrypt = require("bcrypt");
const { captainModel } = require("../models/captain.model");

const createCaptain = async ({ fullname, email, password, color, model, plate, capacity, vehicle }) => {
  const existingUser = await userModel.findOne({ email });
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
  });

  return user;
};

module.exports = {
  createCaptain
};
