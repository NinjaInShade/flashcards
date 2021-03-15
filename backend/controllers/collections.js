const User = require("../models/User");
const Flashcard = require("../models/Flashcard");

function getCollection(req, res, next) {
  const collectionId = req.params.collectionId;

  User.findById(req.user._id)
    .then((user) => {
      const collection = user.collections.find((c) => c._id.toString() === collectionId.toString());

      return res.status(200).json({ message: "Collection successfully found", collection });
    })
    .catch((err) => console.log(err));
}

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

function patchEditCollection(req, res, next) {
  const collectionId = req.params.collectionId;
  const { name, icon } = req.body;

  User.findById(req.user._id)
    .then((user) => {
      let updatedCollections = [...user.collections.toObject()];
      const collectionIndex = user.collections.findIndex((c) => c._id.toString() === collectionId.toString());

      updatedCollections[collectionIndex] = { ...updatedCollections[collectionIndex], name, icon };
      user.collections = updatedCollections;

      return user.save();
    })
    .then(() => {
      return res.status(200).json({ message: "Collection successfully edited" });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  getCollection,
  postAddCollection,
  deleteCollection,
  patchEditCollection,
};
