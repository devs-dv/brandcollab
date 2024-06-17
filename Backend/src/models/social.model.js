import mongoose from "mongoose";

const socialMediaProfileSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  instagram: { type: String, default: null },
  instagramFollowers: { type: String, default: 0 },
  twitter: { type: String, default: null },
  twitterFollowers: { type: String, default: 0 },
  facebook: { type: String, default: null },
  facebookFollowers: { type: String, default: 0 },
  youtube: { type: String, default: null },
  youtubeFollowers: { type: String, default: 0 },
});

const SocialMediaProfile = mongoose.model(
  "SocialMediaProfile",
  socialMediaProfileSchema
);
export default SocialMediaProfile;
