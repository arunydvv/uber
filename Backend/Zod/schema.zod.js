const { z } = require("zod");

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

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

module.exports = {
  registerSchema,
  loginSchema,
};
