const express = require("express");
const router = express.Router();
const { z } = require("zod");
const userController = require("../controllers/user.controller");




// Define Zod schema for validation
const registerSchema = z.object({
  email: z.string().email("Invalid Email"),
  fullname: z.object({
    firstname: z.string().min(3, "Please enter a valid first name"),
    lastname: z.string().optional(), // Optional last name
  }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// POST route for user registration
router.post(
  "/register",
  (req, res, next) => {
    // Extract data from the request body
    const { email, fullname, password } = req.body;

    try {
      registerSchema.parse({ email, fullname, password });
      console.log({ email, fullname, password });
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors, // Zod provides detailed error information
      });
    }
  },
  userController.registerUser  
);

// Test GET route for "/users"
router.get("/", (req, res) => {
  res.send("Cheeath hi kehde");
});

module.exports = router;
