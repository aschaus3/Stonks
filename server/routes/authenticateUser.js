// import required packages
const express = require('express');
const cryptoJS = require('crypto-js');
const router = express.Router();

// import the db connection
const { createConnection } = require('../database/DBVariables');

// router middleware
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  // connection stuff
  const conn = createConnection();
  conn.connect();

  conn.query(`
      SELECT
        *
      FROM
        ${user}
      WHERE
        Username = ${username};
    `, (err, rows) => {
      if (err) throw err;

      if (rows.length === 1) {
        let decryptedPassword = cryptoJS.AES.decrypt(rows[0].Password, 'secret').toString(cryptoJS.enc.Utf8);

        if (decryptedPassword === password)
          res.send({msg: 'User Authentication Successful!', user: rows[0].Username});
        else
          res.send({errMsg: 'User Authentication Unsuccessful\n Username and/or Password Wrong!'});
      } else {

        res.send({errMsg: 'User Authentication Unsuccessful\n Username and/or Password Wrong!'});
      }
    });
});

module.exports = router;