const mysql = require('mysql');

// function to create a db connection
function createConnection() {
  const connection = mysql.createConnection({
    host: '104.154.160.114',
    user: 'root',
    password: 'hackwestern@8',
    database: 'stonks'
  });

  return connection;
}

module.exports = createConnection;
