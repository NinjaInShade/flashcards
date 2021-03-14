const express = require("express");
const router = express.Router();
const passport = require("passport");
const isAuth = require("../util/isAuth");
const authController = require("../controllers/auth");

// GET current authed user + flashcards joined with collections
router.get("/user/full", isAuth, authController.getUserFull);

// GET current authed user
router.get("/user", isAuth, authController.getUser);

// Auth user
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
  })
);

// Auth user was unsuccessfull, callback route
router.get("/google/failure", authController.getAuthFailure);

// Auth user was successfull, callback route
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/auth/google/failure" }), function (req, res) {
  return res.status(200).redirect(`${process.env.FRONTEND_DOMAIN}`);
});

router.get("/logout", authController.getLogout);

module.exports = router;
