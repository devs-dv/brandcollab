import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import Connection from "./config/db.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

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
app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

export default app;
