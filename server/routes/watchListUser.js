// import required packages
const express = require('express');
const router = express.Router();

const { addCrypto } =  require('../database/asyncQueries');

// router middlewares
router.use(express.urlencoded({
    extended: true
  }));
  router.use(express.json());

  router.post('/', (req,res) => {
    let { user } = req.session;
    let coinID = req.body.coinID;
    addCrypto(user, coinID)
    .then(() => {
      res.send({ msg: "Successfully Added to Watch List!" });
    }).catch((err) => {
      res.send({ errMsg: "Unable to Add to Watch List" });
    });
  })

  module.exports = router;
  