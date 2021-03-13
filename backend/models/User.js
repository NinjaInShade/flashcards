const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
