require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const User = require("./models/User");
const app = express();
const passport = require("passport");
const authRoutes = require("./routes/auth");
const flashcardRoutes = require("./routes/flashcards");
const collectionRoutes = require("./routes/collections");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { ValidationError } = require("express-validation");

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_DOMAIN }));

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => console.log(err));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Check if user already exists in our db with the given profile ID
      User.findOne({ googleId: profile.id }).then((user) => {
        if (user) {
          // User is found therefore we don't need to create new one
          done(null, user);
        } else {
          // If not create a new user
          new User({
            googleId: profile.id,
            email: profile._json.email,
            name: profile.displayName,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });
    }
  )
);

app.use(
  cookieSession({
    name: "flashcardSession",
    secret: process.env.SESSION_SECRET,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

// Error handler
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    error: err.message,
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
