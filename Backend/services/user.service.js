const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

module.exports.createUser = async ({ fullname, email, password }) => {
  // Ensure all fields are provided
  if (
    !fullname ||
    !fullname.firstname ||
    !email ||
    !password
  ) {
    throw new Error("All fields are required.");
  }

  // Validate email format
  if (!/\S+@\S+\.\S+/.test(email)) {
    throw new Error("Invalid email format.");
  }

  // Check if the user already exists with the same email
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user
  const user = await userModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword, // Save the hashed password
  });

  return user;
};
