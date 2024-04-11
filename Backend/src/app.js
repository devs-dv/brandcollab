const express = require("express");
require("dotenv").config();
const ejs = require("ejs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const Connection = require("./config/db.js");
const userRouter = require('./routes/user.route.js')
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());


Connection();
app.use('/api/v1',userRouter)

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;