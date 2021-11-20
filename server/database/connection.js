import mysql from 'mysql';

// function to create a db connection
export default function createConnection() {
  const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  });

  return connection;
}
