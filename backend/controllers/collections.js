const User = require("../models/User");

function postAddCollection(req, res, next) {
  const { name, icon } = req.body;

  User.findById(req.user._id)
    .then((user) => {
      user.collections = [...user.collections, { name, icon }];

      return user.save();
    })
    .then(() => {
      return res.status(200).json({ message: "New collectiion successfully added", newCollection: { name, icon } });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  postAddCollection,
};
