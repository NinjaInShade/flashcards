const express = require("express");
const router = express.Router();
const collectionsController = require("../controllers/collections");

router.get("/", collectionsController.template);

module.exports = router;
