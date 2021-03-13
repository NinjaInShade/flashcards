const User = require("../models/User");

function getCollections(req, res, next) {
  return res.status(200).json({
    message: "Controller is handling this",
  });
}

module.exports = {
  getCollections,
};
