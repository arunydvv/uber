const express = require("express");
const router = express.Router();
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} = require("../controllers/captain.controller");

const { loginSchema } = require("../Zod/schema.zod");
const { captainSchema } = require("../Zod/captain.zod");
const { authCaptain } = require("../middlewares/captain.auth.middleware");

// Register route
router.post(
  "/register",
  async (req, res, next) => {
    const { email, fullname, password, status, vehicle } = req.body;
    try {
      const parsedData = captainSchema.parse({
        email,
        fullname,
        password,
        status,
        vehicle,
      });
      req.validatedCaptainData = parsedData;
      return next();
    } catch (error) {
      return res.status(400).json({
        message:
          "Validation error: " + error.errors.map((e) => e.message).join(", "),
        errors: error.errors,
      });
    }
  },
  registerCaptain
);

// Login route
router.post(
  "/login",
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const parsedData = loginSchema.parse({ email, password });
      req.validatedCaptainDataLogin = parsedData;
      return next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid Email or password",
        errors: error.errors,
      });
    }
  },
  loginCaptain
);

// Profile route
router.get("/profile", authCaptain, getCaptainProfile);

// Logout route
router.get("/logout", authCaptain, logoutCaptain);

module.exports = router;
