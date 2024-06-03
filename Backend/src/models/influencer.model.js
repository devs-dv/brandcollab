import mongoose from "mongoose";

const influencerProfileSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: true },
    instagram: { type: String },
    instagramFollowers: { type: Number, default: 0 },
    twitter: { type: String },
    twitterFollowers: { type: Number, default: 0 },
    facebook: { type: String },
    facebookFollowers: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const InfluencerProfile = mongoose.model("InfluencerProfile", influencerProfileSchema);
export default InfluencerProfile;
