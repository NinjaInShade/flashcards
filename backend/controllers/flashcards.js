const Flashcard = require("../models/Flashcard");

// Add new flashcard
function addFlashcard(req, res, next) {
  const { question, answer, collection_id } = req.body;

  const newFlashcard = new Flashcard({ question, answer, collection_id, user_id: req.user._id });

  newFlashcard
    .save()
    .then(() => {
      return res.status(200).json({
        message: "New flashcard successfully created",
        newFlashcard: { question, answer, collection_id, _id: newFlashcard._id },
      });
    })
    .catch((err) => console.log(err));
}

// Delete a flashcard
function deleteFlashcard(req, res, next) {
  const flashcardId = req.params.flashcardId;

  Flashcard.deleteOne({ _id: flashcardId })
    .then(() => {
      return res.status(200).json({ message: "Flashcard successfully deleted" });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  addFlashcard,
  deleteFlashcard,
};
