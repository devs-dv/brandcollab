import User from "../models/user.model.js";
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import sendToken from "../utils/sendToken.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";

const registerUser = asyncErrorHandler(async (req, res, next) => {
  const { firstName, lastName, email, gender, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorHandler("User with this email already exists", 400));
  }
  const myCloud = await cloudinary.uploader.upload(
    req.files.avatar.tempFilePath,
    {
      folder: "avatars",
      width: 150,
      crop: "scale",
    }
  );
  const user = await User.create({
    firstName,
    lastName,
    email,
    gender,
    password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });
  sendToken(user, 200, res);
});

const loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email And Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Incorrect Password", 401));
  }
  sendToken(user, 201, res);
});

const logoutUser = asyncErrorHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


const getAllUsersExceptCurrentUser = asyncErrorHandler(async (req, res, next) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.status(200).json({
    success: true,
    users
  });
});



export { registerUser, loginUser, logoutUser,getAllUsersExceptCurrentUser };
