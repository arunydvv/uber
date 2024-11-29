// routes/user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { registerSchema, loginSchema } = require("../Zod/schema.zod");

router.post(
  "/register",
  async (req, res, next) => {
    const { email, fullname, password } = req.body;
    try {
      const parsedData = registerSchema.parse({ email, fullname, password });
      req.validatedData = parsedData;  // Important check
      next(); 
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Validation error1",
        errors: error.errors, 
      });
    }
  },
  userController.registerUser,
  (err, req, res, next) => {
    console.error("Error:", err);
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something went wrong" });
  }
); 

router.post(
  "/login",
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const parsedData = loginSchema.parse({ email, password });
      req.validatedDataLogin = parsedData;
      next(); 
    } catch (error) {
      return res.status(400).json({
        message: "Invalid Email or password",
        errors: error.errors,
      });
    }
  },
  userController.loginUser,
  (err, req, res, next) => {
    console.error("Error:", err);
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something went wrong" });
  }
); 

module.exports = router;
