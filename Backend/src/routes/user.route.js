import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").get(logoutUser);

export default userRouter;
