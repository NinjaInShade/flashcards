const User = require("../models/User");
const Flashcard = require("../models/Flashcard");

function postAddCollection(req, res, next) {
  const { name, icon } = req.body;

  User.findById(req.user._id)
    .then((user) => {
      user.collections = [...user.collections, { name, icon }];

      return user.save();
    })
    .then(() => {
      return res.status(200).json({ message: "New collection successfully added", newCollection: { name, icon } });
    })
    .catch((err) => console.log(err));
}

function deleteCollection(req, res, next) {
  const collectionId = req.params.collectionId;

  // Delete all flashcards that relate to the collection first
  Flashcard.deleteMany({ collection_id: collectionId })
    .then(() => {
      return User.findById(req.user._id);
    })
    .then((user) => {
      let updatedCollections = req.user.collections.filter((c) => c._id.toString() !== collectionId.toString());

      user.collections = updatedCollections;

      return user.save();
    })
    .then(() => {
      return res.status(200).json({ message: "Collection successfully deleted" });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  postAddCollection,
  deleteCollection,
};
