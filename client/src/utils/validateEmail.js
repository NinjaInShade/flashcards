// eslint-disable-next-line
function validateEmail(email) {
  if (email === "") {
    return "Please type an email";
  }

  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    return "Invalid email";
  }

  return "";
}

module.exports = validateEmail;
