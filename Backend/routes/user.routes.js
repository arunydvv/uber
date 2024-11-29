// routes/user.routes.js
const express = require("express");
const router = express.Router();
const { z } = require("zod");
const userController = require("../controllers/user.controller");

// Define Zod schema for validation
const registerSchema = z.object({
  email: z.string().email("Invalid email format"), // Improved error message
  fullname: z.object({
    firstname: z
      .string()
      .min(3, "First name must be at least 3 characters long"),
    lastname: z.string().min(3, "Last name must be at least 3 characters long"), // Added minimum length validation for lastname
  }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// POST route for user registration
router.post(
  "/register",
  async (req, res, next) => {
    const { email, fullname, password } = req.body;
    console.log({ email, fullname, password });
    console.log("Route entered");

    try {
      // Validate data using Zod schema
      const parsedData = registerSchema.parse({ email, fullname, password });
      console.log("Parsing successful:----------------", parsedData);

      // Pass validated data to the controller
      req.validatedData = parsedData;
      next(); // Proceed to the next middleware
    } catch (error) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors, // Zod provides detailed error information
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

// Test GET route for "/users"
router.get("/", (req, res) => {
  res.send("Hello, user!");
});

module.exports = router;
