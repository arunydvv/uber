const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const connectToMongo = require("./db/db");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectToMongo();

app.use('/users', userRoutes);

app.get("/", (req, res) => {
  console.log("hello")
    res.send("Hello world");
});

module.exports = app;

