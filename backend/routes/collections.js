const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const collectionsController = require("../controllers/collections");

// POST ( create a new collection )
router.post("/add", isAuth, collectionsController.postAddCollection);

// DELETE ( delete a collection )
router.delete("/:collectionId", isAuth, collectionsController.deleteCollection);

module.exports = router;
