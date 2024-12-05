const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const connectToMongo = require("./db/db");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectToMongo();

app.use('/user', userRoutes);
app.use('/captain', captainRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" });
});

module.exports = app;

