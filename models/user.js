// models/user.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'host',
  user: 'user',
  password: 'password',
  database: 'database'
});




module.exports = connection;
