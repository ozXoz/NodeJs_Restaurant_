const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'buup8iufmzqdwxmgag1r-mysql.services.clever-cloud.com',
  user: 'uaortdlriui4dpmj',
  password: 'MKJIiQsq8vARALQVgYDL',
  database: 'buup8iufmzqdwxmgag1r'
});

module.exports = connection;
