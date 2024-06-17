import mongoose from "mongoose";

const appliedJobSchema = mongoose.Schema(
  {
    /**user id */
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    /**influencer id */
    influencer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InfluencerProfile",
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BrandProfile",
      required: true,
    },

    /**user schema data */
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    gender: {
      type: String,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    country: {
      type: String,
      default: null,
    },
    brandName: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    consent: {
      type: Boolean,
    },
    role: {
      type: String,
      default: "user",
    },

    /**influencer schema data */
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    location: { type: String, default: null },
    bio: { type: String, default: null },
    profilePicture: { type: String, default: null },
    instagram: { type: String, default: null },
    instagramFollowers: { type: Number, default: 0 },
    
    twitter: { type: String, default: null },
    twitterFollowers: { type: Number, default: 0 },
    facebook: { type: String, default: null },
    facebookFollowers: { type: Number, default: 0 },
    youtube: { type: String },
    youtubeFollowers: { type: Number, default: 0 },

    /**Brand data */
    brandName: { type: String, default: null },
    industry: { type: String, default: null },
    targetAudiance: { type: String, default: null },
    description: { type: String, default: null },
    budget: { type: String, default: null },
    duration: { type: String, default: null },
    followersRequired: { type: String, default: null },
    email: { type: String, default: null },
    country: { type: String, default: null },
    state: { type: String, default: null },
    city: { type: String, default: null },
    format: { type: String, default: null },
    platform: { type: String, default: null },
    logo: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const AppliedJob = mongoose.model("AppliedJob", appliedJobSchema);
export default AppliedJob;


