// controllers/user.controller.js
const userService = require("../services/user.service");
const { userModel } = require("../models/user.model");

const registerUser = async (req, res, next) => {
  console.log("1");

  try {
    const { fullname, email, password } = req.validatedData;
    console.log("2");

    // Hash the password
    const hashedPassword = await userModel.hashPassword(password);
    console.log("3");

    // Call createUser from userService to create the user in the database
    const user = await userService.createUser({
      fullname,
      email,
      password: hashedPassword,
    });
    console.log("4");

    // Generate JWT token for the user
    const token = user.generateAuthToken();

    // Send success response with token and user details
    res.status(201).json({ token, user });
  } catch (error) {
    console.log("Error-----------",);
    res.json({
      error: error.message || "Server Error",
      status: error.status || 500,
    })
    
  }
};

module.exports = {
  registerUser,
};
