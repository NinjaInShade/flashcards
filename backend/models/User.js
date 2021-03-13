const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
    collections: [{ name: { type: String, maxLength: 20 }, icon: String }, { timestamps: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
