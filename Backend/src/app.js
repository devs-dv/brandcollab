import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./utils/errorHandler.js";
import fileUpload from "express-fileupload";
import Connection from "./config/db.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";
import influencerRouter from "./routes/influencerProfile.route.js";
import brandRouter from "./routes/brandProfile.route.js";
import earningsRouter from "./routes/earning.route.js";
import messageRouter from "./routes/message.route.js";
import socialMediaRouter from "./routes/social.route.js";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
dotenv.config();
const app = express();

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Brand Collab by Promoter",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
      {
        url: "https://digitalpaani-book-management.onrender.com",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

const runServer = http.createServer(app, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

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
app.use("/api/v1", chatRouter);
app.use("/api/v1", messageRouter);
app.use("/api/v1", influencerRouter);
app.use("/api/v1", brandRouter);
app.use("/api/v1", earningsRouter);
app.use("/api/v1", socialMediaRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

const io = new SocketIOServer(runServer);

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

app.use(errorHandler);
export default runServer;
