import mongoose from "mongoose";

const brandProfileSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    brandName: { type: String, required: true },
    industry: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    logo: { type: String, required: true },
  },
  { timestamps: true }
);

const BrandProfile = mongoose.model("BrandProfile", brandProfileSchema);
export default BrandProfile;
