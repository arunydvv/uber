const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller')

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Please enter a valid first name"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  (req, res, next) => {
    console.log(req.body); // Debugging the request body
    next();
  },
  userController.registerUser
);



module.exports = router;

