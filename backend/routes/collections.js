const { validate, Joi } = require("express-validation");
const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const collectionsController = require("../controllers/collections");

const collectionValidation = {
  body: Joi.object({
    name: Joi.string().trim().min(1).max(20),
    icon: Joi.string().trim().min(1).max(20),
  }),
};

// GET ( get collection data )
router.get("/:collectionId", isAuth, collectionsController.getCollection);

// POST ( create a new collection )
router.post("/add", isAuth, validate(collectionValidation, {}, {}), collectionsController.postAddCollection);

// DELETE ( delete a collection )
router.delete("/:collectionId", isAuth, collectionsController.deleteCollection);

// PATCH ( edit a collection )
router.patch("/edit/:collectionId", isAuth, validate(collectionValidation, {}, {}), collectionsController.patchEditCollection);

module.exports = router;
