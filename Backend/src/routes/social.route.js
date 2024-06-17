import express from "express";
import {
  createSocialMediaProfile,
  getUserSocialMediaProfile,
  updateSocialMediaProfile,
} from "../controllers/social.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const socialMediaRouter = express.Router();

socialMediaRouter
  .route("/profile/socialMedia")
  .post(isAuthenticatedUser, createSocialMediaProfile);
socialMediaRouter
  .route("/profile/socialMedia/me")
  .get(isAuthenticatedUser, getUserSocialMediaProfile);
socialMediaRouter
  .route("/profile/socialMedia/update/:id")
  .put(isAuthenticatedUser, updateSocialMediaProfile);

export default socialMediaRouter;
