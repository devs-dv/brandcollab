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

chatRouter.route("/").post(isAuthenticatedUser, accessChat);
chatRouter.route("/").get(isAuthenticatedUser, fetchChats);
chatRouter.route("/group").post(isAuthenticatedUser, createGroupChat);
chatRouter.route("/rename").put(isAuthenticatedUser, renameGroup);
chatRouter.route("/groupremove").put(isAuthenticatedUser, removeFromGroup);
chatRouter.route("/groupadd").put(isAuthenticatedUser, addToGroup);

export default chatRouter;
