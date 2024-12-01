const blackListTokenModel = require("../models/blackListToken.model");
const { captainModel } = require("../models/captain.model");
const jwt = require("jsonwebtoken");

const authCaptain = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token });
  if (isBlackListed) {
    return res.status(403).json({ message: "Token is blacklisted" });
  }

  try {
    // Decode the token and verify its validity
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user exists based on the decoded ID
    const user = await captainModel.findOne({ _id: decoded._id });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Add the user to the request object
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error during token verification:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = {
  authCaptain,
};
