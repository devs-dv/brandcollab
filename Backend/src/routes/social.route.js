import express from "express";
import {
  createOrUpdateSocialMediaProfile,
  getUserSocialMediaProfile,
  updateSocialMediaProfile,
} from "../controllers/social.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const socialMediaRouter = express.Router();

socialMediaRouter
  .route("/profile/socialMedia")
  .post(isAuthenticatedUser, createOrUpdateSocialMediaProfile);
socialMediaRouter
  .route("/profile/socialMedia/me")
  .get(isAuthenticatedUser, getUserSocialMediaProfile);
socialMediaRouter
  .route("/profile/socialMedia/update/:id")
  .put(isAuthenticatedUser, updateSocialMediaProfile);

export default socialMediaRouter;
