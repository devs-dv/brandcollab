import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./utils/errorHandler.js";
import fileUpload from "express-fileupload";
import Connection from "./config/db.js";
import userRouter from "./routes/user.route.js"
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";
import http from "http";
import { Server as SocketIOServer } from "socket.io"; 
dotenv.config();

const app = express();
const runServer = http.createServer(app, {
  cors: true,
}); 
const io = new SocketIOServer(runServer); 

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
app.use('/api/v1',chatRouter);
app.use('/api/v1',messageRouter)

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

app.use(errorHandler);
export default runServer;
