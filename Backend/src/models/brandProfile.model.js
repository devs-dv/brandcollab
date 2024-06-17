import mongoose from "mongoose";

const brandProfileSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    brandName: { type: String, default:null },
    industry: { type: String , default:null},
    location: { type: String , default:null},
    targetAudiance: { type: String, default:null },
    description: { type: String, default:null },
    budget: { type: String , default:null},
    duration: { type: String, default:null },
    followersRequired: { type: Number , default:null},
    email: { type: String, default:null },
    country: { type: String , default:null},
    state: { type: String, default:null },
    city: { type: String , default:null},
    format: { type: String, default:null },
    platform: { type: String, default:null },
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
