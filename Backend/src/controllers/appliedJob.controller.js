import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import AppliedJob from "../models/appliedJob.model.js";
import User from "../models/user.model.js";
import InfluencerProfile from "../models/influencerProfile.model.js";
import BrandProfile from "../models/brandProfile.model.js";
import ErrorHandler from "../utils/errorHandler.js";

const createAppliedJob = asyncErrorHandler(async (req, res, next) => {
  // Fetch data from User, InfluencerProfile, and BrandProfile
  const userdata = await User.findById(req.user._id);
  const influencerdata = await InfluencerProfile.findById(req.user._id);
  const branddata = await BrandProfile.findById(req.params.id);
  console.log(req.user._id);
  console.log("influencerdata", influencerdata);

  //   if (!userdata || !influencerdata || !branddata) {
  //     return next(new ErrorHandler("Invalid data provided", 400));
  //   }

  //   // Create new AppliedJob with the gathered data
  //   const appliedJob = new AppliedJob({
  //     user: req.user._id,
  //     influencer: req.user._id,
  //     firstName: userdata.firstName,
  //     lastName: userdata.lastName,
  //     gender: userdata.gender,
  //     avatar: userdata.avatar,
  //     country: userdata.country,
  //     state: userdata.state,
  //     city: userdata.city,
  //     bio: userdata.bio,
  //     consent: userdata.consent,
  //     role: userdata.role,

  //     influencerFirstName: influencerdata.firstName,
  //     influencerLastName: influencerdata.lastName,
  //     influencerBio: influencerdata.bio,
  //     profilePicture: influencerdata.profilePicture,
  //     instagram: influencerdata.instagram,
  //     instagramFollowers: influencerdata.instagramFollowers,
  //     twitter: influencerdata.twitter,
  //     twitterFollowers: influencerdata.twitterFollowers,
  //     facebook: influencerdata.facebook,
  //     facebookFollowers: influencerdata.facebookFollowers,
  //     youtube:influencerdata.youtube,
  //     youtubeFollowers:influencerdata.youtubeFollowers,

  //     brandName: branddata.brandName,
  //     brandIndustry: branddata.industry,
  //     brandTargetAudience: branddata.targetAudiance,
  //     brandDescription: branddata.description,
  //     brandBudget: branddata.budget,
  //     brandDuration: branddata.duration,
  //     followersRequired: branddata.followersRequired,
  //     brandEmail: branddata.email,
  //     brandCountry: branddata.country,
  //     brandState: branddata.state,
  //     brandCity: branddata.city,
  //     format: branddata.format,
  //     platform: branddata.platform,
  //     logo: branddata.logo,
  //   });

  //   await appliedJob.save();

  //   res.status(201).json({
  //     success: true,
  //     message: "Applied job created successfully",
  //     appliedJob,
  //   });
});

const getAppliedJobs = asyncErrorHandler(async (req, res, next) => {
  const { userId, influencerId, brandId } = req.params;

  const query = {};
  if (userId) query.user = userId;
  if (influencerId) query.influencer = influencerId;
  if (brandId) query.brandName = brandId;

  const appliedJobs = await AppliedJob.find(query);

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
        firstName: job.influencerFirstName,
        lastName: job.influencerLastName,
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
        targetAudience: job.brandTargetAudience,
        description: job.brandDescription,
        budget: job.brandBudget,
        duration: job.brandDuration,
        followersRequired: job.followersRequired,
        email: job.brandEmail,
        country: job.brandCountry,
        state: job.brandState,
        city: job.brandCity,
        format: job.format,
        platform: job.platform,
        logo: job.logo,
      },
    })),
  });
});

export { createAppliedJob, getAppliedJobs };
