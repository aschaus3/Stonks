// import required packages
const express = require('express');
const cors = require('cors');

// import routes
const testAPIRoute = require('./routes/testAPI');
const addUser = require('./routes/addUser');
const authenticateUser = require('./routes/authenticateUser');

// create the server object
const app = express();

// specify port number
const port = 5000;

// Middlewares
app.use(cors());

// connect the app to the route
app.get('/testAPI', testAPIRoute);
app.post('/add-user', addUser);
app.post('/authenticate-user', authenticateUser);

// app listing on the specified port
app.listen(port);
console.log('Server started at http://localhost:' + port);
