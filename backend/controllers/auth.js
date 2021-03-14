const Flashcard = require("../models/Flashcard");

function getUser(req, res, next) {
  return res.status(200).json({
    message: "User from session found",
    user: { name: req.user.name, _id: req.user._id, email: req.user.email, collections: req.user.collections },
  });
}

// Adds the flashcards onto each collection, merging them.
function getUserFull(req, res, next) {
  let collections = [...req.user.collections];

  Flashcard.find({ user_id: req.user._id })
    .then((flashcards) => {
      const updatedCollections = collections.map((c) => {
        const currentCollectionsFlashcards = flashcards.filter((f) => f.collection_id.toString() === c._id.toString());

        return { ...c.toJSON(), flashcards: currentCollectionsFlashcards };
      });

      return res
        .status(200)
        .json({
          message: "Full user data gathered",
          user: { name: req.user.name, _id: req.user._id, email: req.user.email, collections: updatedCollections },
        });
    })
    .catch((err) => console.log(err));
}

function getAuthFailure(req, res, next) {
  return res.status(401).json({
    error: "Authenticate unsuccessfull",
  });
}

function getLogout(req, res, next) {
  req.session = null;
  req.logout();

  res.clearCookie("flashcardSession");
  res.clearCookie("flashcardSession.sid");

  return res.status(200).json({
    message: "User successfully logged out",
  });
}

module.exports = {
  getUser,
  getUserFull,
  getAuthFailure,
  getLogout,
};
