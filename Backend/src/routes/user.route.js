import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  updatePassword,
  getAllUsersExceptCurrentUser,
  updateAvatar 
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for user management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the user.
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           description: The email of the user.
 *         gender:
 *           type: string
 *           description: The gender of the user.
 *         avatar:
 *           type: object
 *           properties:
 *             public_id:
 *               type: string
 *             url:
 *               type: string
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - gender
 *         - avatar
 *         - password
 *     UserInput:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           description: The email of the user.
 *         gender:
 *           type: string
 *           description: The gender of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         confirmPassword:
 *           type: string
 *           description: The confirmation of the password.
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - gender
 *         - password
 *         - confirmPassword
 */

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 */
userRouter.route("/register").post(registerUser);

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
userRouter.route("/login").post(loginUser);

/**
 * @swagger
 * /api/v1/logout:
 *   get:
 *     summary: Logout user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
userRouter.route("/logout").get(logoutUser);

/**
 * @swagger
 * /api/v1/forgetPassword:
 *   post:
 *     summary: Send password reset link
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset link sent
 *       404:
 *         description: User not found
 */
userRouter.route("/forgetPassword").post(forgetPassword);

/**
 * @swagger
 * /api/v1/resetPassword/{token}:
 *   patch:
 *     summary: Reset password
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Reset token
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       404:
 *         description: Invalid token or token expired
 */
userRouter.route("/resetPassword/:token").patch(resetPassword);

/**
 * @swagger
 * /api/v1/updatePassword:
 *   patch:
 *     summary: Update password
 *     tags: [Users]
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
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       401:
 *         description: Incorrect current password
 */
userRouter.route("/updatePassword").patch(isAuthenticatedUser, updatePassword);

/**
 * @swagger
 * /api/v1/getUser:
 *   get:
 *     summary: Get all users except current user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search keyword
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.route("/getUser").get(isAuthenticatedUser, getAllUsersExceptCurrentUser);

/**
 * @swagger
 * /api/v1/avatar/update:
 *   put:
 *     summary: Update user avatar
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *                 description: The avatar image to be uploaded
 *     responses:
 *       200:
 *         description: Avatar updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Avatar updated successfully
 *                 avatar:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       example: sample_public_id
 *                     url:
 *                       type: string
 *                       example: https://res.cloudinary.com/sample_avatar_url.jpg
 *       400:
 *         description: Bad request, e.g., missing avatar file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Please upload an avatar
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: User not found
 */
userRouter.route("/avatar/update").put(isAuthenticatedUser, updateAvatar);


export default userRouter;
