import mongoose from "mongoose";

const socialStatsSchema = mongoose.Schema(
  {
    influencer: { type: mongoose.Schema.Types.ObjectId, ref: "InfluencerProfile", required: true },
    instagramHandle: { type: String, required: true },
    totalFollowers: { type: Number, default: 0 },
    impressionsLast28Days: { type: Number, default: 0 },
    reachLast28Days: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const SocialStats = mongoose.model("SocialStats", socialStatsSchema);
export default SocialStats;
