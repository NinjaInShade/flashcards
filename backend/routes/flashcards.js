const express = require("express");
const router = express.Router();
const flashcardsController = require("../controllers/flashcards");

router.get("/", flashcardsController.template);

module.exports = router;
