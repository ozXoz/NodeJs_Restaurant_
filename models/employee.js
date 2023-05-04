const mysql = require('mysql2');

const connection = mysql.createConnection({
  MYSQL_ADDON_HOST:"buup8iufmzqdwxmgag1r-mysql.services.clever-cloud.com",
  MYSQL_ADDON_DB:"buup8iufmzqdwxmgag1r",
  MYSQL_ADDON_USER:"uaortdlriui4dpmj",
  MYSQL_ADDON_PORT:"3306",
  MYSQL_ADDON_PASSWORD:"MKJIiQsq8vARALQVgYDL"
  // MYSQL_ADDON_URI=mysql://uaortdlriui4dpmj:MKJIiQsq8vARALQVgYDL@buup8iufmzqdwxmgag1r-mysql.services.clever-cloud.com:3306/buup8iufmzqdwxmgag1r
  
});

module.exports = connection;
