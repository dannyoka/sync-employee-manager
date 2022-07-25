const mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  database: 'employee_manager_2',
  password: 'password',
  host: 'localhost',
});

module.exports = db;
