import express from 'express';
import { allMessages, sendMessage } from '../controllers/message.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.js';

const messageRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: API endpoints for message management
 */

/**
 * @swagger
 * /api/v1/message/{chatId}:
 *   get:
 *     summary: Get all messages for a specific chat
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chat to fetch messages from
 *     responses:
 *       200:
 *         description: Messages fetched successfully
 *       400:
 *         description: Bad request
 */
messageRouter.route("/:chatId").get(isAuthenticatedUser, allMessages);

/**
 * @swagger
 * /api/v1/message/send:
 *   post:
 *     summary: Send a new message
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Content of the message
 *               chatId:
 *                 type: string
 *                 description: ID of the chat the message is being sent to
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Bad request
 */
messageRouter.route("/send").post(isAuthenticatedUser, sendMessage);

export default messageRouter;
