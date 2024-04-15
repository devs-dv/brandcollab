import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsersExceptCurrentUser
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").get(logoutUser);
userRouter.route('/getUser').get(isAuthenticatedUser,getAllUsersExceptCurrentUser)

export default userRouter;
