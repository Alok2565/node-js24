const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dhr",
});
conn.connect((error) => {
  if (error) {
    console.warn("Error connecting to database");
  } else {
    //console.warn("Connected to database");
  }
});
module.exports =conn;