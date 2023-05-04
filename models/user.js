// models/user.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// connection.getConnection((err, conn) => {
//   if(err) console.log(err)
//   console.log("Connected successfully")
// })



module.exports = connection;
