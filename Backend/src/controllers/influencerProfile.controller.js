import InfluencerProfile from "../models/influencerProfile.model.js";
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";

const createInfluencerProfile = asyncErrorHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    location,
    bio,
    email,
    instagram,
    instagramFollowers,
    twitter,
    twitterFollowers,
    facebook,
    facebookFollowers,
    youtube,
    youtubeFollowers,
  } = req.body;

  // Check if the user already has an influencer profile
  const existingProfile = await InfluencerProfile.findOne({
    user: req.user._id,
  });

  if (existingProfile) {
    return next(
      new ErrorHandler("Influencer Profile already exists for this user", 400)
    );
  }

  const newProfile = new InfluencerProfile({
    user: req.user._id,
    firstName,
    lastName,
    location,
    bio,
    email,
    instagram,
    instagramFollowers,
    twitter,
    twitterFollowers,
    facebook,
    facebookFollowers,
    youtube,
    youtubeFollowers,
  });

  if (req.files && req.files.profilePicture) {
    try {
      const result = await cloudinary.v2.uploader.upload(
        req.files.profilePicture.tempFilePath,
        {
          folder: "profile_pictures",
          width: 150,
          crop: "scale",
        }
      );
      newProfile.profilePicture = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      return next(new ErrorHandler("Profile picture upload failed", 500));
    }
  }

  await newProfile.save();

  res.status(201).json({
    Message: "Influencer Profile created successfully",
    Status: 201,
    Success: true,
    Data: newProfile,
  });
});

const getAllInfluencerProfiles = asyncErrorHandler(async (req, res, next) => {
  const profiles = await InfluencerProfile.find(); // Fetch all profiles
  res.status(200).json({
    Message: "Influencer Profiles fetched successfully",
    Status: 200,
    Success: true,
    Data: profiles,
  });
});

// Get influencer profile by ID (with authorization)
const getInfluencerProfileById = asyncErrorHandler(async (req, res, next) => {
  const profile = await InfluencerProfile.findOne({
    user: req.user._id, // Filter by current user's ID
  });

  if (!profile) {
    return next(new ErrorHandler("Influencer Profile not found", 404));
  }

  res.status(200).json({
    Message: "Influencer Profile fetched successfully",
    Status: 200,
    Success: true,
    Data: profile,
  });
});

const updateInfluencerProfile = asyncErrorHandler(async (req, res) => {
  const { firstName, lastName, location, bio, email } = req.body;

  const updates = { firstName, lastName, location, bio, email };

  if (req.files && req.files.profilePicture) {
    try {
      const result = await cloudinary.v2.uploader.upload(
        req.files.profilePicture.tempFilePath,
        {
          folder: "profile_pictures",
          width: 150,
          crop: "scale",
        }
      );
      updates.profilePicture = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      return next(new ErrorHandler("Profile picture upload failed", 500));
    }
  }

  const updatedProfile = await InfluencerProfile.findOneAndUpdate(
    { user: req.user._id },
    updates,
    { new: true }
  );

  if (!updatedProfile) {
    return res.status(404).json({
      Message: "Influencer Profile not found",
      Status: 404,
      Success: false,
    });
  }

  res.status(200).json({
    Message: "Influencer Profile Update successful",
    Status: 200,
    Success: true,
    Data: updatedProfile,
  });
});

export {
  createInfluencerProfile,
  getAllInfluencerProfiles,
  getInfluencerProfileById,
  updateInfluencerProfile,
};
