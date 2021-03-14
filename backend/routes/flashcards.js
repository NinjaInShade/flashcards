const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const flashcardsController = require("../controllers/flashcards");

// POST ( add a new flashcard )
router.post("/add", isAuth, flashcardsController.addFlashcard);

module.exports = router;
