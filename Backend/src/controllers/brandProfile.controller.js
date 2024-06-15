import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import BrandProfile from "../models/brandProfile.model.js";

const createBrandProfile = asyncErrorHandler(async (req, res, next) => {
  const {
    brandName,
    industry,
    location,
    targetAudiance,
    description,
    budget,
    duration,
    followersRequired,
    email,
    format,
  } = req.body;

  const brandProfile = new BrandProfile({
    user: req.user._id,
    brandName,
    industry,
    location,
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
  });

  if (req.files && req.files.logo) {
    const result = await cloudinary.v2.uploader.upload(
      req.files.logo.tempFilePath,
      {
        folder: "brand_logos",
        width: 150,
        crop: "scale",
      }
    );

    brandProfile.logo = result.secure_url;
  }

  await brandProfile.save();

  res.status(201).json({
    success: true,
    message: "Brand profile created successfully",
    brandProfile,
  });
});

// Get a single brand profile
const getBrandProfile = asyncErrorHandler(async (req, res, next) => {
  const brandProfile = await BrandProfile.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!brandProfile) {
    return next(new ErrorHandler("Brand profile not found", 404));
  }

  res.status(200).json({
    success: true,
    brandProfile,
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
    const result = await cloudinary.v2.uploader.upload(
      req.files.logo.tempFilePath,
      {
        folder: "brand_logos",
        width: 150,
        crop: "scale",
      }
    );

    updates.logo = result.secure_url;
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
