// eslint-disable-next-line
function validateUsername(username) {
  if (username === "") {
    return "Please enter a username";
  }

  if (username.length > 15) {
    return "Cannot exceed 15 chars";
  }

  return "";
}

module.exports = validateUsername;
