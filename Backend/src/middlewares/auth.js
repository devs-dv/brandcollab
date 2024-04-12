import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncErrorHandler from "./asyncErrorHandler.js";

export const isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
  const token = req.header("Authorization");
  // console.log("authentication token", token);
  if (!token) {
    return res.status(401).json({ error: "Authorization token missing" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = user;
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
  next();
});

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403)
      );
    }
    next();
  };
};
