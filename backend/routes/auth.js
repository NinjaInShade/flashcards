const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth");

router.get("/user", authController.getUser);

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
  return res.status(200).redirect(`${process.env.FRONTEND_DOMAIN}`);
});

router.get("/logout", authController.getLogout);

module.exports = router;
