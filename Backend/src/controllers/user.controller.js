import User from "../models/user.model.js";
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import sendToken from "../utils/sendToken.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import InfluencerProfile from "../models/influencerProfile.model.js";

const registerUser = asyncErrorHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    gender,
    password,
    confirmPassword,
    role,
    consent,
    brandName
  } = req.body;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 400));
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorHandler("User with this email already exists", 400));
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    gender,
    password,
    role,
    consent,
    brandName,
    avatar: {
      public_id: "",
      url: "",
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

  res.status(201).json({
    success: true,
    message: "Avatar updated successfully",
    user,
  });
});

const updateAvatar = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
   console.log(user)
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  if (!req.files || !req.files.avatar) {
    return next(new ErrorHandler("Please upload an avatar", 400));
  }

  const myCloud = await cloudinary.uploader.upload(
    req.files.avatar.tempFilePath,
    {
      folder: "avatars",
      width: 150,
      crop: "scale",
    }
  );

  user.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: "Avatar updated successfully",
    avatar: user.avatar,
  });
});


const influencerProfileUpdate = asyncErrorHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    gender,
    role,
    brandName,
    consent,
    country,
    state,
    city,
    bio
  } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const updatedFields = {
    firstName,
    lastName,
    gender,
    role,
    brandName,
    consent,
    country,
    state,
    city,
    bio
  };

  if (req.files && req.files.avatar) {
    if (user.avatar.public_id) {
      await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    }
    const result = await cloudinary.v2.uploader.upload(req.files.avatar.tempFilePath, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    updatedFields.avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }
  const updatedUser = await User.findByIdAndUpdate(req.user._id, updatedFields, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    user: updatedUser,
  });
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

const forgetPassword = asyncErrorHandler(async (req, res, next) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (!user) {
    return next(new ErrorHandler("Invalid Email", 404));
  }
  const resetToken = await user.getResetPasswordToken();
  user.save({ validateBeforeSave: false });
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/resetPassword/${resetToken}`;
  const message = `We have received a password reset request. Please use the following link to reset your password:\n\n${resetUrl}\n\nThis reset password link will be valid only for 10 minutes.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password change request received",
      message: message,
    });
    res.status(200).json({
      status: "success",
      message: "Password reset link sent to the user",
    });
  } catch (error) {
    return next(
      new ErrorHandler(
        "There was an error sending the password link. Please try again later.",
        500
      )
    );
  }
});

const resetPassword = asyncErrorHandler(async (req, res, next) => {
  const token = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorHandler("Token is Invalid or has expired", 404));
  }
  console.log(token);
  console.log(user);
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  user.passwordChangedAt = Date.now();
  user.save();

  //write code here to login automatically
  const authToken = user.getJWTToken();

  res.status(200).json({
    success: true,
    message: "Password has been reset successfully",
    token: authToken,
  });
});

const updatePassword = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("+password");
  if (!(await user.comparePassword(req.body.currentPassword, user.password))) {
    return next(
      new ErrorHandler("The Current password you provided is wrong", 401)
    );
  }
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  await user.save();

  const authToken = user.getJWTToken();

  res.status(200).json({
    success: true,
    message: "Password has been updated successfully",
    token: authToken,
    data: {
      user,
    },
  });
});

const getAllUsersExceptCurrentUser = asyncErrorHandler(
  async (req, res, next) => {
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
      users,
    });
  }
);

export {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  updatePassword,
  getAllUsersExceptCurrentUser,
  updateAvatar,
  influencerProfileUpdate
};
