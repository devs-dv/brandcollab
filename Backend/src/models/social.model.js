import mongoose from "mongoose";

const socialMediaProfileSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  instagram: { type: String },
  instagramFollowers: { type: String },
  twitter: { type: String },
  twitterFollowers: { type: String },
  facebook: { type: String },
  facebookFollowers: { type: String },
  youtube: { type: String },
  youtubeFollowers: { type: String },
});

const SocialMediaProfile = mongoose.model(
  "SocialMediaProfile",
  socialMediaProfileSchema
);
export default SocialMediaProfile;
