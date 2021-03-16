const { validate, Joi } = require("express-validation");
const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const flashcardsController = require("../controllers/flashcards");

const flashcardValidation = {
  body: Joi.object({
    question: Joi.string().trim().min(1).max(500),
    answer: Joi.string().trim().min(1).max(1000),
  }),
};

// GET ( get a flashcard )
router.get("/:flashcardId", isAuth, flashcardsController.getFlashcard);

// POST ( add a new flashcard )
router.post("/add", isAuth, validate(flashcardValidation, {}, {}), flashcardsController.addFlashcard);

// DELETE ( Delete a flashcard )
router.delete("/:flashcardId", isAuth, flashcardsController.deleteFlashcard);

// PATCH ( Edit a flashcard )
router.patch("/edit/:collectionId/:flashcardId", isAuth, validate(flashcardValidation, {}, {}), flashcardsController.patchEditFlashcard);

module.exports = router;
