module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.signup_post = (req, res) => {
  res.send("signup"); // Sends the HTTP response.
};
module.exports.login_post = (req, res) => {
  res.send("login");
};

// res.render() function compiles your template (please don't use ejs), inserts locals there, and creates html output out of those two things.
