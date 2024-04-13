const asyncErrorHandler = (errorFunction) => async (req, res, next) => {
  try {
    await Promise.resolve(errorFunction(req, res, next));
  } catch (error) {
    next(error);
  }
};

export default asyncErrorHandler;
