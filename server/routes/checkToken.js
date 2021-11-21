const express = require('express');
const router = express.Router();

const withAuth = require('./withAuth');

router.get('/', withAuth, (req, res) => {
  res.send({
    user: req.user
  });
});

module.exports = router;
