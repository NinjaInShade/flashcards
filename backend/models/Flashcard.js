const mongoose = require("mongoose");
const { Schema } = mongoose;

const flashcardSchema = new Schema(
  {
    question: { type: String, maxLength: 500 },
    answer: { type: String, maxLength: 1000 },
    user_id: mongoose.ObjectId,
    collection_id: mongoose.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flashcard", flashcardSchema);
