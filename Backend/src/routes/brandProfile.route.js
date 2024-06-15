import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  createBrandProfile,
  getBrandProfile,
  updateBrandProfile,
} from "../controllers/brandProfile.controller.js";

const brandRouter = express.Router();
brandRouter.route("/profile").post(isAuthenticatedUser, createBrandProfile);
brandRouter.route("/profile").get(isAuthenticatedUser, getBrandProfile);
brandRouter.route("/profile").put(isAuthenticatedUser, updateBrandProfile);

export default brandRouter;
