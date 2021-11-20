const { createConnection, user }  = require('./DBVariables');

// create the connection
const conn = createConnection();

// connect to the database
conn.connect();

// drop the table if it exists
conn.query(`
    DROP TABLE IF EXISTS ${user};
  `, (err) => {
    if (err) throw (err);

    console.log(`Successfully Dropped ${user} Table!`);
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
  if (err) throw (err);

  console.log(`Successfully Created ${user} Table!`);
});

// close the connection
conn.end();
