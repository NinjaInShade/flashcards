const express = require("express");
const router = express.Router();
const passport = require("passport");
const isAuth = require("../util/isAuth");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/auth");

// GET current authed user + flashcards joined with collections
router.get("/user/full", isAuth, authController.getUserFull);

// GET current authed user
router.get("/user", isAuth, authController.getUser);

// Auth user
router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
    prompt: "consent",
  })
);

// Auth user was unsuccessfull, callback route
router.get("/google/failure", authController.getAuthFailure);

// Auth user was successfull, callback route
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/auth/google/failure" }), function (req, res) {
  const token = jwt.sign({ user_id: req.user._id }, `${process.env.JWT_SECRET}`, { expiresIn: "1h" });

  return res.status(200).redirect(`${process.env.FRONTEND_DOMAIN}/?token=${token}`);
});

module.exports = router;
