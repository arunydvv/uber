const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  // Ensure all fields are provided
  if (!firstname || !lastname || !email || !password) {
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

  // Create the new user
  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
