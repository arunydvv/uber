const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserProfile,logoutUser} = require("../controllers/user.controller");
const { registerSchema, loginSchema,  } = require("../Zod/schema.zod");
const { authUser } = require("../middlewares/auth.middleware");

// Register route
router.post(
  "/register",
  async (req, res, next) => {
    const { email, fullname, password } = req.body;
    try {
      const parsedData = registerSchema.parse({ email, fullname, password });
      req.validatedData = parsedData;
      return next(); // Ensures the next middleware (userController.registerUser) is called
    } catch (error) {
      return res.status(400).json({
        message:
          "Validation error: " + error.errors.map((e) => e.message).join(", "),
        errors: error.errors,
      });
    }
  },
  registerUser // Ensure this is a valid function
);

// Login route
router.post(
  "/login",
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const parsedData = loginSchema.parse({ email, password });
      req.validatedDataLogin = parsedData;
      return next(); // Ensures the next middleware (userController.loginUser) is called
    } catch (error) {
      return res.status(400).json({
        message: "Invalid Email or password",
        errors: error.errors,
      });
    }
  },
  loginUser // Ensure this is a valid function
);

// Profile route
router.get("/profile", authUser, getUserProfile);
router.get("/logout", authUser, logoutUser);

module.exports = router;
