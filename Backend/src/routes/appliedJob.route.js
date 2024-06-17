import express from "express";
import { createAppliedJob, getAppliedJobs } from "../controllers/appliedJob.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const appliedJobRouter = express.Router();

appliedJobRouter.route("/appliedJob/create").post(isAuthenticatedUser, createAppliedJob);
appliedJobRouter.route("/appliedJob/get/:userId?/:influencerId?/:brandId?").get(isAuthenticatedUser, getAppliedJobs);

export default appliedJobRouter;
