import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import SocialMediaProfile from "../models/social.model.js";
import ErrorHandler from "../utils/errorHandler.js";

// Create a social media profile
const createSocialMediaProfile = asyncErrorHandler(async (req, res, next) => {
  const {
    instagram,
    instagramFollowers,
    twitter,
    twitterFollowers,
    facebook,
    facebookFollowers,
    youtube,
    youtubeFollowers,
  } = req.body;
   console.log(req.body)

  const socialMediaProfile = new SocialMediaProfile({
    user: req.user._id,
    instagram,
    instagramFollowers,
    twitter,
    twitterFollowers,
    facebook,
    facebookFollowers,
    youtube,
    youtubeFollowers,
  });

  await socialMediaProfile.save();

  res.status(201).json({
    success: true,
    message: "Social media profile created successfully",
    socialMediaProfile,
  });
});

// Get social media profiles by brand profile ID
const getAllSocialMediaProfiles = asyncErrorHandler(async (req, res, next) => {
    const socialMediaProfiles = await SocialMediaProfile.find();
  
    res.status(200).json({
      success: true,
      socialMediaProfiles,
    });
  });

// Update a social media profile by ID
const updateSocialMediaProfile = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  // Validate if the ID is provided and exists
  if (!id) {
    return next(new ErrorHandler("Social media profile ID is required", 400));
  }

  let socialMediaProfile = await SocialMediaProfile.findById(id);
  if (!socialMediaProfile) {
    return next(new ErrorHandler("Social media profile not found", 404));
  }

  // Update the fields
  socialMediaProfile = await SocialMediaProfile.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Social media profile updated successfully",
    socialMediaProfile,
  });
});

export { createSocialMediaProfile, getAllSocialMediaProfiles, updateSocialMediaProfile };