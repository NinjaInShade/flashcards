const AppError = require("../util/error");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    const error = new AppError("User not authorized", 401);

    next(error);
  }

  const tokenHeader = req.headers.authorization.split(" ")[1];
  const token = tokenHeader.substring(1, tokenHeader.length - 1);
  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

  User.findById(decoded.user_id)
    .then((user) => {
      req.user = user;

      next();
    })
    .catch((err) => console.log(err));
};
