import express from 'express';
import { allMessages, sendMessage } from '../controllers/message.controller.js';
 import { isAuthenticatedUser } from '../middlewares/auth.js';
const messageRouter = express.Router();

 messageRouter.route("/:chatId").get(isAuthenticatedUser, allMessages);
 messageRouter.route("/send").post(isAuthenticatedUser, sendMessage);


export default messageRouter;