const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const collectionsController = require("../controllers/collections");

// GET ( get collection data )
router.get("/:collectionId", isAuth, collectionsController.getCollection);

// POST ( create a new collection )
router.post("/add", isAuth, collectionsController.postAddCollection);

// DELETE ( delete a collection )
router.delete("/:collectionId", isAuth, collectionsController.deleteCollection);

// PATCH ( edit a collection )
router.patch("/edit/:collectionId", isAuth, collectionsController.patchEditCollection);

module.exports = router;
