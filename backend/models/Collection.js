const mongoose = require("mongoose");
const { Schema } = mongoose;

const collectionSchema = new Schema(
  {
    name: { type: String, maxLength: 20 },
    icon: String,
    user_id: mongoose.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", collectionSchema);
