import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import AppliedJob from "../models/appliedJob.model.js";
import User from "../models/user.model.js";
import InfluencerProfile from "../models/influencerProfile.model.js";
import BrandProfile from "../models/brandProfile.model.js";
import ErrorHandler from "../utils/errorHandler.js";

const createAppliedJob = asyncErrorHandler(async (req, res, next) => {
  // Fetch data from User, InfluencerProfile, and BrandProfile
  const userdata = await User.findById(req.user._id);
  const influencerdata = await InfluencerProfile.findOne({
    user: req.user._id,
  });
  const branddata = await BrandProfile.findById(req.query.brandId);
  console.log(branddata);
  if (!userdata || !influencerdata || !branddata) {
    return next(new ErrorHandler("Invalid data provided", 400));
  }

  const appliedJob = new AppliedJob({
    user: req.user._id,
    influencer: req.user._id,
    brand: branddata._id,
    firstName: userdata.firstName,
    lastName: userdata.lastName,
    gender: userdata.gender,
    avatar: userdata.avatar,
    country: userdata.country,
    state: userdata.state,
    city: userdata.city,
    bio: userdata.bio,
    consent: userdata.consent,
    role: userdata.role,

    influencerBio: influencerdata.bio,
    profilePicture: influencerdata.profilePicture,
    instagram: influencerdata.instagram,
    instagramFollowers: influencerdata.instagramFollowers,
    twitter: influencerdata.twitter,
    twitterFollowers: influencerdata.twitterFollowers,
    facebook: influencerdata.facebook,
    facebookFollowers: influencerdata.facebookFollowers,
    youtube: influencerdata.youtube,
    youtubeFollowers: influencerdata.youtubeFollowers,

    brandName: branddata.brandName,
    brandIndustry: branddata.industry,
    brandDescription: branddata.description,
    brandBudget: branddata.budget,
    brandDuration: branddata.duration,
    followersRequired: branddata.followersRequired,
    brandEmail: branddata.email,
    format: branddata.format,
    platform: branddata.platform,
  });

  await appliedJob.save();

  res.status(201).json({
    success: true,
    message: "Applied job created successfully",
    appliedJob,
  });
});

const getAppliedJobsByBrandId = asyncErrorHandler(async (req, res, next) => {
  const { brandId } = req.params;

  if (!brandId) {
    return next(new ErrorHandler("Brand ID is required", 400));
  }

  const appliedJobs = await AppliedJob.find({ brand: brandId });

  if (!appliedJobs.length) {
    return next(new ErrorHandler("No jobs found for this brand ID", 404));
  }

  res.status(200).json({
    success: true,
    message: "success",
    data: appliedJobs.map((job) => ({
      user: {
        userId: job.user,
        firstName: job.firstName,
        lastName: job.lastName,
        gender: job.gender,
        avatar: job.avatar,
        country: job.country,
        brandName: job.brandName,
        state: job.state,
        city: job.city,
        bio: job.bio,
        consent: job.consent,
        role: job.role,
      },
      influencer: {
        influencerId: job.influencer,
        location: job.location,
        bio: job.influencerBio,
        profilePicture: job.profilePicture,
        instagram: job.instagram,
        instagramFollowers: job.instagramFollowers,
        twitter: job.twitter,
        twitterFollowers: job.twitterFollowers,
        facebook: job.facebook,
        facebookFollowers: job.facebookFollowers,
      },
      brand: {
        brandName: job.brandName,
        industry: job.brandIndustry,
        description: job.brandDescription,
        budget: job.brandBudget,
        duration: job.brandDuration,
        followersRequired: job.followersRequired,
        format: job.format,
        platform: job.platform,
      },
    })),
  });
});

const deleteAppliedJobsByBrandId = asyncErrorHandler(async (req, res, next) => {
  const { brandId } = req.params;
  console.log(brandId);
  if (!brandId) {
    return next(new ErrorHandler("Brand ID is required", 400));
  }

  const result = await AppliedJob.deleteMany({ brand: brandId });

  if (result.deletedCount === 0) {
    return next(new ErrorHandler("No jobs found for this brand ID", 404));
  }

  res.status(200).json({
    success: true,
    message: "Applied jobs deleted successfully",
    deletedCount: result.deletedCount,
  });
});

export {
  createAppliedJob,
  getAppliedJobsByBrandId,
  deleteAppliedJobsByBrandId,
};
