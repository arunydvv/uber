const { z } = require("zod");

const fullnameSchema = z.object({
  firstname: z.string().min(3, "First name must be at least 3 characters long"), 
  lastname: z.string().min(3, "Last name must be at least 3 characters long"),
});

const locationSchema = z.object({
  latitude: z.number().optional(), // Latitude is optional
  longitude: z.number().optional(), // Longitude is optional
});

const vehicleSchema = z.object({
  color: z.string().min(3, "Color must be at least 3 characters long"), // Validates color
  plate: z.string().min(7, "Plate must be at least 7 characters long"), // Validates plate
  capacity: z.number().min(1, "Capacity must be at least 1"), // Validates capacity
  vehicleType: z.enum(["car", "bike", "auto"], {
    errorMap: () => ({
      message: "Vehicle type must be 'car', 'bike', or 'auto'",
    }),
  }), // Enum validation for vehicle type
  location: locationSchema.optional(), // Optional location object
});

const captainSchema = z.object({
  fullname: fullnameSchema, // Embeds the fullname schema
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters long"), // Validates email
  password: z.string().min(8, "Password must be at least 8 characters long"), // Validates password
  socketId: z.string().optional(), // Socket ID is optional
  status: z
    .enum(["active", "inactive"], {
      errorMap: () => ({ message: "Status must be 'active' or 'inactive'" }),
    })
    .default("inactive"), // Status with default value
  vehicle: vehicleSchema, // Embeds the vehicle schema
});

module.exports = {
  fullnameSchema,
  locationSchema,
  vehicleSchema,
  captainSchema,
};
