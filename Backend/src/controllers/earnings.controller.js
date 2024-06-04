import Earnings from '../models/earnings.model.js';
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";

// Get Earnings from Brand Collaboration Platform
const getEarningsFromBrandCollaboration = asyncErrorHandler(async (req, res) => {
  const { influencerId } = req.body;

  const earnings = await Earnings.findOne({ influencer: influencerId });

  if (!earnings) {
    return res.status(404).json({
      Message: "Earnings not found for the given influencer",
      Status: 404,
      Success: false,
      Data: null,
    });
  }

  res.status(200).json({
    Message: "Earnings fetched successfully",
    Status: 200,
    Success: true,
    Data: {
      influencerId: earnings.influencer,
      totalEarnings: earnings.totalEarnings,
    },
  });
});

// Update Earnings
const updateEarnings = asyncErrorHandler(async (req, res) => {
  const { influencerId, totalEarnings } = req.body;

  let earnings = await Earnings.findOne({ influencer: influencerId });

  if (!earnings) {
    earnings = new Earnings({
      influencer: influencerId,
      totalEarnings,
    });
    await earnings.save();
  } else {
    earnings.totalEarnings = totalEarnings;
    await earnings.save();
  }

  res.status(201).json({
    Message: "Earnings updated successfully",
    Status: 201,
    Success: true,
    Data: {
      influencerId: earnings.influencer,
      totalEarnings: earnings.totalEarnings,
    },
  });
});

export { getEarningsFromBrandCollaboration, updateEarnings };
