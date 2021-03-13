function getUser(req, res, next) {
  if (req.user) {
    return res.status(200).json({ message: "User from session found", user: { name: req.user.name, _id: req.user._id, email: req.user.email } });
  }

  return res.status(404).json({ error: "No user in session" });
}

function getAuthFailure(req, res, next) {
  return res.status(401).json({
    error: "Authenticate unsuccessfull",
  });
}

function getLogout(req, res, next) {
  req.session = null;
  req.logout();

  return res.status(200).json({
    message: "User successfully logged out",
  });
}

module.exports = {
  getUser,
  getAuthFailure,
  getLogout,
};
