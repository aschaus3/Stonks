const jwt = require('jsonwebtoken');

const withAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).send({errMsg: 'Unauthorized: No token provided' });
  } else {
    jwt.verify(token, 'secret', function(err, decoded) {
      if (err) {
        console.log(err);
        res.status(401).send({errMsg: 'Unauthorized: Invalid token' });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
}

module.exports = withAuth;
