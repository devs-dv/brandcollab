import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} from "../controllers/chat.controller.js";

const chatRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: API endpoints for chat management
 */

/**
 * @swagger
 * /api/v1/chat/access:
 *   post:
 *     summary: Access a chat between two users
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user to chat with
 *     responses:
 *       200:
 *         description: Chat accessed successfully
 *       400:
 *         description: Bad request
 */
chatRouter.route("/access").post(isAuthenticatedUser, accessChat);

/**
 * @swagger
 * /api/v1/chat/fetch:
 *   get:
 *     summary: Fetch all chats for the logged-in user
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Chats fetched successfully
 *       400:
 *         description: Bad request
 */
chatRouter.route("/fetch").get(isAuthenticatedUser, fetchChats);

/**
 * @swagger
 * /api/v1/chat/group:
 *   post:
 *     summary: Create a new group chat
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: string
 *                 description: JSON string of user IDs
 *               name:
 *                 type: string
 *                 description: Name of the group chat
 *     responses:
 *       200:
 *         description: Group chat created successfully
 *       400:
 *         description: Bad request
 */
chatRouter.route("/group").post(isAuthenticatedUser, createGroupChat);

/**
 * @swagger
 * /api/v1/chat/rename:
 *   put:
 *     summary: Rename a group chat
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chatId:
 *                 type: string
 *               chatName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Group chat renamed successfully
 *       404:
 *         description: Chat not found
 */
chatRouter.route("/rename").put(isAuthenticatedUser, renameGroup);

/**
 * @swagger
 * /api/v1/chat/groupremove:
 *   put:
 *     summary: Remove a user from a group chat
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chatId:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User removed from group chat successfully
 *       404:
 *         description: Chat not found
 */
chatRouter.route("/groupremove").put(isAuthenticatedUser, removeFromGroup);

/**
 * @swagger
 * /api/v1/chat/groupadd:
 *   put:
 *     summary: Add a user to a group chat
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chatId:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User added to group chat successfully
 *       404:
 *         description: Chat not found
 */
chatRouter.route("/groupadd").put(isAuthenticatedUser, addToGroup);

export default chatRouter;
