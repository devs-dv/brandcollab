import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  createInfluencerProfile,
  getAllInfluencerProfiles,
  getInfluencerProfileById,
  updateInfluencerProfile,
} from "../controllers/influencerProfile.controller.js";

const influencerRouter = express.Router();

influencerRouter
  .route("/influencerProfile/create")
  .post(isAuthenticatedUser, createInfluencerProfile);
influencerRouter
  .route("/influencerProfiles")
  .get(isAuthenticatedUser, getAllInfluencerProfiles);

influencerRouter
  .route("/influencerProfile")
  .get(isAuthenticatedUser, getInfluencerProfileById);

influencerRouter
  .route("/influencerProfile/update")
  .put(isAuthenticatedUser, updateInfluencerProfile);

export default influencerRouter;
