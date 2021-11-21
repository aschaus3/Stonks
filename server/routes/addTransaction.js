// import required packages and modules
const express = require('express');
const { getAllUsers, addTransaction } = require('../database/asyncQueries');

// use the express router
const router = express.Router();

// router middlewares
router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());

router.post('/', (req, res) => {
  const currentUser = req.body.user;
  const coin = req.body.coinName;

  const isSelling = req.body.isSelling;
  const isBuying = req.body.isBuying;

  if (isSelling && isBuying) {
    res.send({ msg: "Invalid Transaction!" });
    return;
  }

  let userID;

  getAllUsers()
    .then((users) => {
      for (let user of users) {
        if (user.Username == currentUser) {
          userID = user.UserID;
          break;
        }
      }

      addTransaction(userID, coin, isSelling, isBuying)
        .then(() => {
          res.send({ msg: "Added Transaction Successfully!" });
          return;
          }).catch((err) => {
            console.log(err);

            res.send({ msg: 'Invalid Transaction!' });
            return;
          });
      })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
