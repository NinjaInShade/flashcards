const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  title: String,
});

const UserSchema = new Schema({
  username: String,
  password: String,
  groups: [GroupSchema],
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
