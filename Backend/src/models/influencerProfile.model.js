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
    instagram: { type: String, default: null },
    instagramFollowers: { type: Number, default: 0 },
    twitter: { type: String, default: null },
    twitterFollowers: { type: Number, default: 0 },
    facebook: { type: String, default: null },
    facebookFollowers: { type: Number, default: 0 },
    youtube: { type: String, default: null },
    youtubeFollowers: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const InfluencerProfile = mongoose.model(
  "InfluencerProfile",
  influencerProfileSchema
);
export default InfluencerProfile;
