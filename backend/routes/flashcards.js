const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const flashcardsController = require("../controllers/flashcards");

// POST ( add a new flashcard )
router.post("/add", isAuth, flashcardsController.addFlashcard);

// DELETE ( Delete a flashcard )
router.delete("/:flashcardId", isAuth, flashcardsController.deleteFlashcard);

module.exports = router;
