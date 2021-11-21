const { createConnection, user, watchList } = require('./DBVariables');

const conn = createConnection();

conn.connect();

conn.query(`SELECT * FROM ${user}`, (err, rows) => {
  if (err) throw err;

  console.log(`Data from ${user} Table: `);
  for (let r of rows) {
    console.log(r);
  }
});

conn.query(`SELECT * FROM ${watchList}`, (err, rows) => {
  if (err) throw err;

  console.log(`Data from ${watchList} Table: `);
  for (let r of rows) {
    console.log(r);
  }
});

conn.end();
