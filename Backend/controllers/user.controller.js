const userService = require("../services/user.service");
const { userModel } = require("../models/user.model");

const registerUser = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.validatedData;

    const user = await userService.createUser({
      fullname,
      email,
      password,
    });
    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  } catch (error) {
    console.log("Error-----------");
    res.status(error.status || 500).json({
      error: error.message || "Server Error",
    });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.validatedDataLogin;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email / password" });
    }

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  } catch (error) {
    console.log("Error-----------");
    res.status(error.status || 500).json({
      error: error.message || "Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};

