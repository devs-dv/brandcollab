import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  getTotalInstagramFollowers,
  getInstagramImpressionsLast28Days,
  getInstagramReachLast28Days
} from "../controllers/social.controller.js";

const socialRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: SocialStats
 *   description: API endpoints for managing influencer social stats
 */

/**
 * @swagger
 * /api/v1/social/instagram/followers:
 *   get:
 *     summary: Get total Instagram followers for an influencer
 *     tags: [SocialStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Total Instagram followers fetched successfully
 *       400:
 *         description: Bad request
 */
socialRouter.route("/instagram/followers").get(isAuthenticatedUser, getTotalInstagramFollowers);

/**
 * @swagger
 * /api/v1/social/instagram/impressions:
 *   get:
 *     summary: Get Instagram impressions for the last 28 days for an influencer
 *     tags: [SocialStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Instagram impressions for last 28 days fetched successfully
 *       400:
 *         description: Bad request
 */
socialRouter.route("/instagram/impressions").get(isAuthenticatedUser, getInstagramImpressionsLast28Days);

/**
 * @swagger
 * /api/v1/social/instagram/reach:
 *   get:
 *     summary: Get Instagram reach for the last 28 days for an influencer
 *     tags: [SocialStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Instagram reach for last 28 days fetched successfully
 *       400:
 *         description: Bad request
 */
socialRouter.route("/instagram/reach").get(isAuthenticatedUser, getInstagramReachLast28Days);

export default socialRouter;
