import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import SocialMediaProfile from "../models/social.model.js";
import ErrorHandler from "../utils/errorHandler.js";

const createOrUpdateSocialMediaProfile = asyncErrorHandler(async (req, res, next) => {
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

  const userId = req.user._id;

  // Check if a social media profile already exists for this user
  let socialMediaProfile = await SocialMediaProfile.findOne({ user: userId });

  if (socialMediaProfile) {
    // Update the existing profile
    socialMediaProfile.instagram = instagram;
    socialMediaProfile.instagramFollowers = instagramFollowers;
    socialMediaProfile.twitter = twitter;
    socialMediaProfile.twitterFollowers = twitterFollowers;
    socialMediaProfile.facebook = facebook;
    socialMediaProfile.facebookFollowers = facebookFollowers;
    socialMediaProfile.youtube = youtube;
    socialMediaProfile.youtubeFollowers = youtubeFollowers;

    await socialMediaProfile.save();

    res.status(200).json({
      success: true,
      message: "Social media profile updated successfully",
      socialMediaProfile,
    });
  } else {
    // Create a new profile
    socialMediaProfile = new SocialMediaProfile({
      user: userId,
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
  }
});

// Get social media profile of the logged-in user
const getUserSocialMediaProfile = asyncErrorHandler(async (req, res, next) => {
  const userId = req.user._id;
  const socialMediaProfile = await SocialMediaProfile.findOne({ user: userId });

  if (!socialMediaProfile) {
    return next(new ErrorHandler("Social media profile not found", 404));
  }

  res.status(200).json({
    success: true,
    socialMediaProfile,
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

export { createOrUpdateSocialMediaProfile, getUserSocialMediaProfile, updateSocialMediaProfile };
