import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  updateBrandProfile,
  createBrandPost,
  changeBrandPassword
} from "../controllers/brandProfile.controller.js";

const brandRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: API endpoints for brand profile management
 */

/**
 * @swagger
 * /api/v1/brand/profile:
 *   put:
 *     summary: Update brand profile information
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brandName:
 *                 type: string
 *               industry:
 *                 type: string
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *               email:
 *                 type: string
 *               logo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Brand profile updated successfully
 *       400:
 *         description: Bad request
 */
brandRouter.route("/profile").put(isAuthenticatedUser, updateBrandProfile);

/**
 * @swagger
 * /api/v1/brand/post:
 *   post:
 *     summary: Create a new post for the brand
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brandName:
 *                 type: string
 *               productDescription:
 *                 type: string
 *               targetAudience:
 *                 type: string
 *               advertisementObjective:
 *                 type: string
 *               budget:
 *                 type: string
 *               duration:
 *                 type: string
 *     responses:
 *       201:
 *         description: Brand post created successfully
 *       400:
 *         description: Bad request
 */
brandRouter.route("/post").post(isAuthenticatedUser, createBrandPost);

/**
 * @swagger
 * /api/v1/brand/change-password:
 *   put:
 *     summary: Change brand password
 *     tags: [Brands]
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
brandRouter.route("/change-password").put(isAuthenticatedUser, changeBrandPassword);

export default brandRouter;
