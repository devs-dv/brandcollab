import mongoose from "mongoose";

const brandProfileSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    brandName: { type: String },
    industry: { type: String },
    location: { type: String },
    targetAudiance: { type: String },
    description: { type: String },
    budget: { type: String },
    duration: { type: String },
    followersRequired: { type: Number },
    email: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    format: { type: String },
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

const BrandProfile = mongoose.model("BrandProfile", brandProfileSchema);
export default BrandProfile;
