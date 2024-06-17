import express from "express";
import {
  createAppliedJob,
  getAppliedJobsByBrandId,
  deleteAppliedJobsByBrandId,
} from "../controllers/appliedJob.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const appliedJobRouter = express.Router();

appliedJobRouter.post(
  "/apply",
  isAuthenticatedUser,
  createAppliedJob
);
appliedJobRouter.get(
  "/appliedJobs/brand/:brandId",
  isAuthenticatedUser,
  getAppliedJobsByBrandId
);
appliedJobRouter.delete(
  "/appliedJobs/brand/:brandId",
  isAuthenticatedUser,
  deleteAppliedJobsByBrandId
);
export default appliedJobRouter;
