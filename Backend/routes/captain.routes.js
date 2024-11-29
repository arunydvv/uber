const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require("../controllers/user.controller");
const { captainSchema } = require("../Zod/captain.zod");

// Register route
router.post(
  "/register",
  async (req, res, next) => {
    const { email, fullname, password, vehicle } = req.body; 
    try {
      // Validate destructured fields using Zod schema
      const parsedData = captainSchema.parse({
        email,
        fullname,
        password,
        vehicle,
      });
      req.validatedData = parsedData; // Attach validated data to the request object
      return next(); // Proceed to the next middleware/controller
    } catch (error) {
      // Return validation error response
      return res.status(400).json({
        message:
          "Validation error: " + error.errors.map((e) => e.message).join(", "),
        errors: error.errors,
      });
    }
  },
  registerUser // Proceed to the registerUser controller
);

module.exports = router;
