const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
  question: String,
  answer: String,
  completed: Boolean,
  groupId: ObjectId,
});

const Flashcard = mongoose.model("flashcard", FlashcardSchema);
module.exports = Flashcard;
