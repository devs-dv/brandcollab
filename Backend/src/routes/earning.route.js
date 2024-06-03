import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  getEarningsFromBrandCollaboration,
  updateEarnings
} from "../controllers/earnings.controller.js";

const earningsRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Earnings
 *   description: API endpoints for managing influencer earnings
 */

/**
 * @swagger
 * /api/v1/earnings:
 *   get:
 *     summary: Get earnings from brand collaboration platform for an influencer
 *     tags: [Earnings]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Earnings fetched successfully
 *       404:
 *         description: Earnings not found for the given influencer
 */
earningsRouter.route("/").get(isAuthenticatedUser, getEarningsFromBrandCollaboration);

/**
 * @swagger
 * /api/v1/earnings:
 *   put:
 *     summary: Update earnings for an influencer
 *     tags: [Earnings]
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
 *       200:
 *         description: Earnings updated successfully
 */
earningsRouter.route("/").put(isAuthenticatedUser, updateEarnings);

export default earningsRouter;
