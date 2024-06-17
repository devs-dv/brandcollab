import mongoose from "mongoose";

const influencerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    location: { type: String, default: null },
    bio: { type: String, default: null },
    email: { type: String, default: null },
    profilePicture: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    instagram: { type: String },
    instagramFollowers: { type: Number, default: 0 },
    twitter: { type: String },
    twitterFollowers: { type: Number, default: 0 },
    facebook: { type: String },
    facebookFollowers: { type: Number, default: 0 },
    youtube: { type: String },
    youtubeFollowers: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const InfluencerProfile = mongoose.model("InfluencerProfile", influencerProfileSchema);
export default InfluencerProfile;
