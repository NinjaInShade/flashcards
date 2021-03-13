const express = require("express");
const router = express.Router();
const isAuth = require("../util/isAuth");
const collectionsController = require("../controllers/collections");

// GET all collections for the current authed user
router.get("/", isAuth, collectionsController.getCollections);

module.exports = router;
