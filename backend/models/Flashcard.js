import mongoose from "mongoose";
const { Schema } = mongoose;

const flashcardSchema = new Schema(
  {
    question: { type: String, maxLength: 500 },
    answer: { type: String, maxLength: 1000 },
    user_id: mongoose.ObjectId,
  },
  { timestamps: true }
);

export default Flashcard = mongoose.model("Flashcard", flashcardSchema);
