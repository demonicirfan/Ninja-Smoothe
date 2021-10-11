const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(
      token,
      'this is a secret do not expose it',
      (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.redirect('/login');
        } else {
          console.log(decodedToken);
          next();
        }
      }
    );
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      'this is a secret do not expose it',
      async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          next();
        } else {
          console.log(decodedToken);
          let user = await user.findById(decodedToken.id);
          next();
        }
      }
    );
  } else {
  }
};

module.exports = { requireAuth };
