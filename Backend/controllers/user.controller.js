const { validationResult } = require("express-validator");
const userService = require("../services/user.service"); // Make sure you import userService
const { userModel } = require("../models/user.model");




module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    // Call createUser from userService
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    next(error); // Pass the error to error handling middleware
  }
};
