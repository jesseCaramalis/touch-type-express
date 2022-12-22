const express = require("express");
const router = express.Router();
const wordsController = require('../controllers/wordLib');

router.get("/wordToType", wordsController.getWordToType);

module.exports = router;