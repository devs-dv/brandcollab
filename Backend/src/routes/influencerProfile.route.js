import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  updateInfluencerProfile,
  updateInfluencerSocials,
  changeInfluencerPassword,
} from "../controllers/influencerProfile.controller.js";

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
influencerRouter
  .route("/profile")
  .put(isAuthenticatedUser, updateInfluencerProfile);

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
influencerRouter
  .route("/socials")
  .put(isAuthenticatedUser, updateInfluencerSocials);

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
influencerRouter
  .route("/change-password")
  .put(isAuthenticatedUser, changeInfluencerPassword);



export default influencerRouter;
