const BlackListTokenCaptain = require("../models/blackListToken.captain");
const { captainModel } = require("../models/captain.model");
const jwt = require("jsonwebtoken");

const authCaptain = async (req, res, next) => {
  // Try to get the token from the Authorization header or the cookies
  const token =
    req.header("Authorization")?.replace("Bearer ", "") || req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Check if the token is blacklisted
  const isBlackListed = await BlackListTokenCaptain.findOne({ token });
  if (isBlackListed) {
    return res.status(403).json({ message: "Token is blacklisted" });
  }

  try {
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
    return res.status(401).json({
      message: "Unauthorized: Invalid or expired token",
    });
  }
};

module.exports = { authCaptain };
