const express = require("express");
const router = express.Router();
const flashcardsController = require("../controllers/flashcards");

router.post("/add", flashcardsController.addFlashcard);

module.exports = router;
