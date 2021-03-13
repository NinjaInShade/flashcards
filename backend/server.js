const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server successfully started on port ${process.env.PORT || 5000}`);

  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASSWORD}@mongoapp.puyp7.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Mongoose connected successfully");
    })
    .catch((err) => {
      console.log(`Mongoose connection error: ${err}`);
    });
});
