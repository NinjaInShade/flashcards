const AppError = require("../util/error");

module.exports = function (req, res, next) {
  if (!req.user) {
    const error = new AppError("User not authorized", 401);

    next(error);
  }

  next();
};
