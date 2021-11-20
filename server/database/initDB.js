const { createConnection, user }  = require('./DBVariables');

// create the connection
const conn = createConnection();

// connect to the database
conn.connect();

// drop the table if it exists
conn.query(`
    DROP TABLE IF EXISTS ${user};
  `, (err) => {
  console.log(err);
});

// create the table for users
conn.query(`
  CREATE TABLE ${user} (
    UserID INT AUTO_INCREMENT
    ,Username VARCHAR(50)
    ,Password VARCHAR(100)
    ,PRIMARY KEY (UserID)
  );
`, (err) => {
  console.log(err);
});

// close the connection
conn.end();
