// import required packages
const express = require('express');

// create the server object
const app = express();
const router  = express.Router();

// specify port number
const port = 5000;

// routes for the server
router.get('/', (req, res) => {
  res.send({
    'message': 'This is a message from express'
  });
});

// let the server use the express router
app.get('/', router);

// app listing on the specified port
app.listen(port);
