const Flashcard = require("../models/Flashcard");

function addFlashcard(req, res, next) {
  const { question, answer, collection_id } = req.body;

  const newFlashcard = new Flashcard({ question, answer, collection_id });

  newFlashcard
    .save()
    .then(() => {
      return res.status(200).json({
        message: "New flashcard successfully created",
        newFlashcard: { question, answer, collection_id },
      });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  addFlashcard,
};
