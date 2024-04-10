const ErrorHandler = require("../utils/errorHandler");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.statusCode = err.statusCode || 500;
    error.message = err.message || "Internal Server Error";

    if (error.name === "CastError") {
        const message = `Resource Not Found. Invalid: ${error.path}`;
        error = new ErrorHandler(message, 400);
    }

    if (error.code === 11000) {
        const message = `Duplicate ${Object.keys(error.keyValue)} entered`;
        error = new ErrorHandler(message, 400);
    }

    if (error.name === "JsonWebTokenError") {
        if (error.message === "jwt expired") {
            error = new ErrorHandler("JWT has expired", 401);
        } else {
            error = new ErrorHandler("Invalid JWT", 401);
        }
    }

    if (error.name === "ValidationError") {
        // Mongoose validation error handling
        const message = Object.values(error.errors).map((val) => val.message);
        error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
        success: false,
        error: error.message || "Server Error",
    });
};

module.exports = errorHandler;