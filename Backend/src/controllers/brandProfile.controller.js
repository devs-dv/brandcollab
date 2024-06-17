import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import User from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import BrandProfile from "../models/brandProfile.model.js";
import cloudinary from "cloudinary";
const createBrandProfile = asyncErrorHandler(async (req, res, next) => {
  const {
    brandName,
    industry,
    targetAudiance,
    description,
    budget,
    duration,
    followersRequired,
    country,
    state,
    city,
    email,
    format,
    platform,
  } = req.body;

  const brandProfile = new BrandProfile({
    user: req.user._id,
    brandName,
    industry,
    targetAudiance,
    description,
    budget,
    duration,
    followersRequired,
    country,
    state,
    city,
    email,
    format,
    platform,
  });

  if (req.files && req.files.logo) {
    try {
      const result = await cloudinary.v2.uploader.upload(
        req.files.logo.tempFilePath,
        {
          folder: "brand_logos",
          width: 150,
          crop: "scale",
        }
      );
      brandProfile.logo = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      return next(new ErrorHandler("Logo upload failed", 500));
    }
  }

  await brandProfile.save();

  res.status(201).json({
    success: true,
    message: "Brand profile created successfully",
    brandProfile,
  });
});

const getBrandProfile = asyncErrorHandler(async (req, res, next) => {
  const { country, state, city, minFollowers, maxFollowers, sort } = req.query;

  const query = {};

  if (country) {
    query.country = country;
  }

  if (state) {
    query.state = state;
  }

  if (city) {
    query.city = city;
  }

  if (minFollowers && maxFollowers) {
    query.followersRequired = {
      $gte: Number(minFollowers),
      $lte: Number(maxFollowers),
    };
  } else if (minFollowers) {
    query.followersRequired = { $gte: Number(minFollowers) };
  } else if (maxFollowers) {
    query.followersRequired = { $lte: Number(maxFollowers) };
  }

  let sortOption = { createdAt: -1 };

  if (sort) {
    if (sort === "followers") {
      sortOption = { followersRequired: -1 };
    }
  }

  const brandProfiles = await BrandProfile.find(query).sort(sortOption);

  res.status(200).json({
    success: true,
    brandProfiles,
  });
});

// Update a brand profile
const updateBrandProfile = asyncErrorHandler(async (req, res, next) => {
  let brandProfile = await BrandProfile.findById(req.params.id);
  if (!brandProfile) {
    return next(new ErrorHandler("Brand profile not found", 404));
  }
  const updates = req.body;
  if (req.files && req.files.logo) {
    try {
      const result = await cloudinary.v2.uploader.upload(
        req.files.logo.tempFilePath,
        {
          folder: "brand_logos",
          width: 150,
          crop: "scale",
        }
      );
      updates.logo = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      return next(new ErrorHandler("Logo upload failed", 500));
    }
  }

  brandProfile = await BrandProfile.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Brand profile updated successfully",
    brandProfile,
  });
});

export { createBrandProfile, getBrandProfile, updateBrandProfile };
