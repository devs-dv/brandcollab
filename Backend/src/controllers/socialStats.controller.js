import axios from 'axios';  // Assuming you are fetching data from external APIs
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";

// Get Total Instagram Followers
const getTotalInstagramFollowers = asyncErrorHandler(async (req, res) => {
  const { instagramHandle } = req.body;

  // Replace with actual API call to fetch total followers
  const response = await axios.get(`https://api.instagram.com/total_followers?handle=${instagramHandle}`);
  const totalFollowers = response.data.totalFollowers;

  res.status(200).json({
    Message: "Total Instagram Followers fetched successfully",
    Status: 200,
    Success: true,
    Data: {
      instagramHandle,
      totalFollowers
    }
  });
});

// Get Instagram Impressions Last 28 Days
const getInstagramImpressionsLast28Days = asyncErrorHandler(async (req, res) => {
  const { instagramHandle } = req.body;

  // Replace with actual API call to fetch impressions
  const response = await axios.get(`https://api.instagram.com/impressions_last_28_days?handle=${instagramHandle}`);
  const impressionsLast28Days = response.data.impressionsLast28Days;

  res.status(200).json({
    Message: "Instagram Impressions for last 28 days fetched successfully",
    Status: 200,
    Success: true,
    Data: {
      instagramHandle,
      impressionsLast28Days
    }
  });
});

// Get Instagram Reach Last 28 Days
const getInstagramReachLast28Days = asyncErrorHandler(async (req, res) => {
  const { instagramHandle } = req.body;

  // Replace with actual API call to fetch reach
  const response = await axios.get(`https://api.instagram.com/reach_last_28_days?handle=${instagramHandle}`);
  const reachLast28Days = response.data.reachLast28Days;

  res.status(200).json({
    Message: "Instagram Reach for last 28 days fetched successfully",
    Status: 200,
    Success: true,
    Data: {
      instagramHandle,
      reachLast28Days
    }
  });
});

// Get Earnings from Brand Collaboration Platform
const getEarningsFromBrandCollaboration = asyncErrorHandler(async (req, res) => {
  const { influencerId } = req.body;

  // Replace with actual API call to fetch earnings
  const response = await axios.get(`https://api.collaborationplatform.com/earnings?influencerId=${influencerId}`);
  const totalEarnings = response.data.totalEarnings;

  res.status(200).json({
    Message: "Earnings fetched successfully",
    Status: 200,
    Success: true,
    Data: {
      influencerId,
      totalEarnings
    }
  });
});

export {
  getTotalInstagramFollowers,
  getInstagramImpressionsLast28Days,
  getInstagramReachLast28Days,
  getEarningsFromBrandCollaboration
};
