const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const flashcardsController = require("../controllers/flashcards");

// GET ( get a flashcard )
router.get("/:flashcardId", isAuth, flashcardsController.getFlashcard);

// POST ( add a new flashcard )
router.post("/add", isAuth, flashcardsController.addFlashcard);

// DELETE ( Delete a flashcard )
router.delete("/:flashcardId", isAuth, flashcardsController.deleteFlashcard);

// PATCH ( Edit a flashcard )
router.patch("/edit/:collectionId/:flashcardId", isAuth, flashcardsController.patchEditFlashcard);

module.exports = router;
