const express = require("express");
require("dotenv").config();
const cors = require("cors");

const Connection = require("./config/db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

Connection();

app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
});


module.exports = app;