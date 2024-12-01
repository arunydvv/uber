const bcrypt = require("bcrypt");
const captainModel = require("../models/captainModel"); // Ensure you have the correct path to your model

const createCaptain = async ({ fullname, email, password, vehicle }) => {
  // Check if the user already exists with the provided email
  const existingUser = await captainModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Destructure vehicle object for easier handling
  const { color, plate, capacity, vehicleType } = vehicle;

  // Create the new captain
  const user = await captainModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return user;
};

module.exports = {
  createCaptain,
};
