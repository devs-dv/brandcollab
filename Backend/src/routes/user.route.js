import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  updatePassword,
  getAllUsersExceptCurrentUser,
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").get(logoutUser);
userRouter.route("/forgetPassword").post(forgetPassword);
userRouter.route("/resetPassword/:token").patch(resetPassword);
userRouter.route("/updatePassword").patch(isAuthenticatedUser, updatePassword);
userRouter
  .route("/getUser")
  .get(isAuthenticatedUser, getAllUsersExceptCurrentUser);

export default userRouter;
