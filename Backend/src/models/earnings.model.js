import mongoose from "mongoose";

const earningsSchema = mongoose.Schema(
  {
    influencer: { type: mongoose.Schema.Types.ObjectId, ref: "InfluencerProfile", required: true },
    totalEarnings: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Earnings = mongoose.model("Earnings", earningsSchema);
export default Earnings;
