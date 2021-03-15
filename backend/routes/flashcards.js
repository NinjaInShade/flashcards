const { validate, Joi } = require("express-validation");
const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const flashcardsController = require("../controllers/flashcards");

const collectionValidation = {
  body: Joi.object({
    name: Joi.string().trim().min(1).max(20),
    icon: Joi.string().trim().min(1).max(20),
  }),
};

// GET ( get a flashcard )
router.get("/:flashcardId", isAuth, flashcardsController.getFlashcard);

// POST ( add a new flashcard )
router.post("/add", isAuth, validate(collectionValidation, {}, {}), flashcardsController.addFlashcard);

// DELETE ( Delete a flashcard )
router.delete("/:flashcardId", isAuth, flashcardsController.deleteFlashcard);

// PATCH ( Edit a flashcard )
router.patch("/edit/:collectionId/:flashcardId", isAuth, validate(collectionValidation, {}, {}), flashcardsController.patchEditFlashcard);

module.exports = router;
