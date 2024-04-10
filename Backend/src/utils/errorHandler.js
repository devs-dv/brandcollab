function createErrorHandler(message, statusCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    Error.captureStackTrace(error, createErrorHandler);
    return error;
  }
  
  module.exports = createErrorHandler;
  