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
  getAuthFailure,
  getLogout,
};
