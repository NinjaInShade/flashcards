const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const flashcardRoutes = require("./routes/flashcards");
const collectionRoutes = require("./routes/collections");

// Route middlewares
app.use("/auth", authRoutes);
app.use("/flashcards", flashcardRoutes);
app.use("/collections", collectionRoutes);

// 404 route handler
app.use((req, res, next) => {
  return res.status(404).json({
    error: "404 route not found",
  });
});

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
