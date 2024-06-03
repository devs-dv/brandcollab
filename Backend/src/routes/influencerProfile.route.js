import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  updateInfluencerAbout,
  updateInfluencerSocials,
  changeInfluencerPassword,
  getTotalInstagramFollowers,
  getInstagramImpressions,
  getInstagramReach,
  getEarningsFromBrandCollaboration,
  updateEarnings
} from "../controllers/influencer.controller.js";

const influencerRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Influencers
 *   description: API endpoints for influencer profile management
 */

/**
 * @swagger
 * /api/v1/influencer/profile:
 *   put:
 *     summary: Update influencer profile information
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               location:
 *                 type: string
 *               bio:
 *                 type: string
 *               email:
 *                 type: string
 *               profilePicture:
 *                 type: string
 *     responses:
 *       201:
 *         description: Influencer profile updated successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/profile").put(isAuthenticatedUser, updateInfluencerAbout);

/**
 * @swagger
 * /api/v1/influencer/socials:
 *   put:
 *     summary: Update influencer social media information
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instagram:
 *                 type: string
 *               instagramFollowers:
 *                 type: string
 *               twitter:
 *                 type: string
 *               twitterFollowers:
 *                 type: string
 *               facebook:
 *                 type: string
 *               facebookFollowers:
 *                 type: string
 *     responses:
 *       201:
 *         description: Influencer social media updated successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/socials").put(isAuthenticatedUser, updateInfluencerSocials);

/**
 * @swagger
 * /api/v1/influencer/change-password:
 *   put:
 *     summary: Change influencer password
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               confirmNewPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: Password changed successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/change-password").put(isAuthenticatedUser, changeInfluencerPassword);

/**
 * @swagger
 * /api/v1/instagram/followers:
 *   get:
 *     summary: Get total Instagram followers for an influencer
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instagramHandle:
 *                 type: string
 *     responses:
 *       200:
 *         description: Total Instagram followers fetched successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/instagram/followers").get(isAuthenticatedUser, getTotalInstagramFollowers);

/**
 * @swagger
 * /api/v1/instagram/impressions:
 *   get:
 *     summary: Get Instagram impressions for the last 28 days
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instagramHandle:
 *                 type: string
 *     responses:
 *       200:
 *         description: Instagram impressions fetched successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/instagram/impressions").get(isAuthenticatedUser, getInstagramImpressions);

/**
 * @swagger
 * /api/v1/instagram/reach:
 *   get:
 *     summary: Get Instagram reach for the last 28 days
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instagramHandle:
 *                 type: string
 *     responses:
 *       200:
 *         description: Instagram reach fetched successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/instagram/reach").get(isAuthenticatedUser, getInstagramReach);

/**
 * @swagger
 * /api/v1/earnings:
 *   get:
 *     summary: Get total earnings from brand collaborations
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               influencerId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Earnings fetched successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/earnings").get(isAuthenticatedUser, getEarningsFromBrandCollaboration);

/**
 * @swagger
 * /api/v1/earnings/update:
 *   put:
 *     summary: Update earnings for an influencer
 *     tags: [Influencers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               influencerId:
 *                 type: string
 *               totalEarnings:
 *                 type: number
 *     responses:
 *       201:
 *         description: Earnings updated successfully
 *       400:
 *         description: Bad request
 */
influencerRouter.route("/earnings/update").put(isAuthenticatedUser, updateEarnings);

export default influencerRouter;
