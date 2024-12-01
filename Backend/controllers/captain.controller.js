const userService = require("../services/user.service");
const { captainModel } = require("../models/captain.model");
const blackListTokenModel = require("../models/blackListToken.model");

const registerCaptain = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.validatedData;

    const user = await userService.createUser({
      fullname,
      email,
      password,
    });
    const token = user.generateAuthToken();
    res.status(200).json({ token, user }); 
  } catch (error) {
    res.status(error.status || 500).json({
      error: error.message || "Server Error",
    });
  }
};

const loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.validatedDataLogin;
    const user = await captainModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email / password" });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(error.status || 500).json({
      error: error.message || "Server Error",
    });
  }
};

const getCaptainProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({ message: "User profile not found" });
    }
    res.status(200).json(req.user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
const logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  res.clearCookie("token");
  await blackListTokenModel.create({
    token,
  });
  res.status(200).json({
    message: "Logged out successfully",
  });
};

module.exports = {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
};

