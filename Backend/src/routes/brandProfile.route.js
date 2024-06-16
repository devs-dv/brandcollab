import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  createBrandProfile,
  getBrandProfile,
  updateBrandProfile,
} from "../controllers/brandProfile.controller.js";

const brandRouter = express.Router();
brandRouter.route("/profile/save").post(isAuthenticatedUser, createBrandProfile);
brandRouter.route("/profile/get").get(getBrandProfile);
brandRouter.route("/profile/update/:id").put(isAuthenticatedUser, updateBrandProfile);

export default brandRouter;
