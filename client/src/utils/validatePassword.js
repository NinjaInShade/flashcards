function validatePassword(password) {
  if (password === "") {
    return "Please enter a password";
  }

  if (password.length < 8) {
    return "Atleast 8 chars";
  }

  return "";
}

module.exports = validatePassword;
