// import required packages and modules
const express = require('express');
const cryptoJS = require('crypto-js');
const { getAllUsers, addUser } = require('../database/asyncQueries');

// use the express router
const router = express.Router();

// router middlewares
router.use(express.urlencoded({
  extended: true
}));

router.post('/', (req, res) => {
  const username = req.body.username;
  let password = req.body.password;
  password = cryptoJS.AES.encrypt(JSON.stringify({ password }), 'secret').toString();

  getAllUsers().then((users) => {
    for (let user of users) {
      if (username === user.Username) {
        res.send({ errMsg: 'Username Already Exists' });
        return;
      }
    }

    addUser(username, password).then(() => {
      res.send({ msg: 'User Added Successfully!' });
      return;
    }).catch((err) => { console.log(err) });

  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
