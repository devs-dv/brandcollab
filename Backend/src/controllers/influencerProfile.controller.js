import InfluencerProfile from "../models/influencerProfile.model.js";
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";


const createInfluencerProfile = asyncErrorHandler(async (req, res, next) => {
  const { firstName, lastName, location, bio, email, profilePicture, instagram, instagramFollowers, twitter, twitterFollowers, facebook, facebookFollowers, youtube, youtubeFollowers } = req.body;

  // Check if the user already has an influencer profile
  const existingProfile = await InfluencerProfile.findOne({ user: req.user._id });

  if (existingProfile) {
    return next(new ErrorHandler("Influencer Profile already exists for this user", 400));
  }

  // Create a new influencer profile
  const newProfile = new InfluencerProfile({
    user: req.user._id,
    firstName,
    lastName,
    location,
    bio,
    email,
    profilePicture,
    instagram,
    instagramFollowers,
    twitter,
    twitterFollowers,
    facebook,
    facebookFollowers,
    youtube,
    youtubeFollowers
  });

  await newProfile.save();

  res.status(201).json({
    Message: "Influencer Profile created successfully",
    Status: 201,
    Success: true,
    Data: newProfile,
  });
});

// Influencer Profile Update
const updateInfluencerProfile = asyncErrorHandler(async (req, res) => {
  const { firstName, lastName, location, bio, email, profilePicture } = req.body;

  const updatedProfile = await InfluencerProfile.findOneAndUpdate(
    { user: req.user._id },
    { firstName, lastName, location, bio, email, profilePicture },
    { new: true }
  );

  if (!updatedProfile) {
    return res.status(404).json({ 
      Message: "Influencer Profile not found",
      Status: 404,
      Success: false
    });
  }

  res.status(201).json({
    Message: "Influencer Profile Update successful",
    Status: 201,
    Success: true,
    Data: updatedProfile,
  });
});

// Influencer Social Update
const updateInfluencerSocials = asyncErrorHandler(async (req, res) => {
  const { instagram, instagramFollowers, twitter, twitterFollowers, facebook, facebookFollowers } = req.body;

  const updatedSocials = await InfluencerProfile.findOneAndUpdate(
    { user: req.user._id },
    { instagram, instagramFollowers, twitter, twitterFollowers, facebook, facebookFollowers },
    { new: true }
  );

  if (!updatedSocials) {
    return res.status(404).json({ 
      Message: "Influencer Profile not found",
      Status: 404,
      Success: false
    });
  }

  res.status(201).json({
    Message: "Influencer Social Update successful",
    Status: 201,
    Success: true,
    Data: updatedSocials,
  });
});

// Influencer Change Password
const changeInfluencerPassword = asyncErrorHandler(async (req, res) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({
      Message: "New Password and Confirm Password do not match",
      Status: 400,
      Success: false
    });
  }

  const influencer = await InfluencerProfile.findOne({ user: req.user._id }).populate("user");
  const user = influencer.user;

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
    Message: "Influencer Password Update successful",
    Status: 201,
    Success: true,
    Data: { currentPassword, newPassword, confirmNewPassword },
  });
});

export {
  createInfluencerProfile,
  updateInfluencerProfile,
  updateInfluencerSocials,
  changeInfluencerPassword
};
