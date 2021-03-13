const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth");

// Auth user
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Auth user was unsuccessfull, callback route
router.get("/google/failure", authController.getAuthFailure);

// Auth user was successfull, callback route
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/auth/google/failure" }), function (req, res) {
  res.status(200).json({ message: "User successfully authenticated", user: { name: req.user.name, _id: req.user._id, email: req.user.email } });
});

router.get("/logout", authController.getLogout);

module.exports = router;
