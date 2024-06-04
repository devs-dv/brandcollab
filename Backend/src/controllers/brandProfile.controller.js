import BrandProfile from "../models/brandProfile.model.js";
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";

// Brand Profile Update
const updateBrandProfile = asyncErrorHandler(async (req, res) => {
  const { brandName, industry, location, description, email, logo } = req.body;

  const updatedProfile = await BrandProfile.findOneAndUpdate(
    { user: req.user._id },
    { brandName, industry, location, description, email, logo },
    { new: true }
  );

  if (!updatedProfile) {
    return res.status(404).json({ 
      Message: "Brand Profile not found",
      Status: 404,
      Success: false
    });
  }

  res.status(201).json({
    Message: "Brand Profile Update successful",
    Status: 201,
    Success: true,
    Data: updatedProfile,
  });
});

// Brand Create Post
const createBrandPost = asyncErrorHandler(async (req, res) => {
  const { brandName, productDescription, targetAudience, advertisementObjective, budget, duration } = req.body;

  const newPost = new BrandProfile({
    brandName,
    productDescription,
    targetAudience,
    advertisementObjective,
    budget,
    duration,
    user: req.user._id,
  });

  await newPost.save();

  res.status(201).json({
    Message: "Brand Post Creation successful",
    Status: 201,
    Success: true,
    Data: newPost,
  });
});

// Brand Change Password
const changeBrandPassword = asyncErrorHandler(async (req, res) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({
      Message: "New Password and Confirm Password do not match",
      Status: 400,
      Success: false
    });
  }

  const brand = await BrandProfile.findOne({ user: req.user._id }).populate("user");
  const user = brand.user;

  const isMatch = await user.matchPassword(currentPassword);
  if (!isMatch) {
    return res.status(401).json({
      Message: "Incorrect current password",
      Status: 401,
      Success: false
    });
  }

  user.password = newPassword;
  await user.save();

  res.status(201).json({
    Message: "Brand Password Update successful",
    Status: 201,
    Success: true,
    Data: { currentPassword, newPassword, confirmNewPassword },
  });
});

export {
  updateBrandProfile,
  createBrandPost,
  changeBrandPassword
};
