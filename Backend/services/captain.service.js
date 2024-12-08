const bcrypt = require("bcrypt");
const {captainModel} = require("../models/captain.model"); 

const createCaptain = async ({ fullname, email, password, vehicle }) => {

  const existingUser = await captainModel.findOne({ email });
      console.log(existingUser);

  if (existingUser) {
    const error = new Error("User already exists with this email.");
    error.statusCode = 409;
    throw error;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const { color, plate, capacity, vehicleType } = vehicle;

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
