const { validate, Joi } = require("express-validation");
const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const collectionsController = require("../controllers/collections");

const flashcardValidation = {
  body: Joi.object({
    question: Joi.string().trim().min(1).max(500),
    answer: Joi.string().trim().min(1).max(1000),
  }),
};

// GET ( get collection data )
router.get("/:collectionId", isAuth, collectionsController.getCollection);

// POST ( create a new collection )
router.post("/add", isAuth, validate(flashcardValidation, {}, {}), collectionsController.postAddCollection);

// DELETE ( delete a collection )
router.delete("/:collectionId", isAuth, collectionsController.deleteCollection);

// PATCH ( edit a collection )
router.patch("/edit/:collectionId", isAuth, validate(flashcardValidation, {}, {}), collectionsController.patchEditCollection);

module.exports = router;
