import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
  },
  { timestamps: true }
);

export default User = mongoose.model("User", userSchema);
