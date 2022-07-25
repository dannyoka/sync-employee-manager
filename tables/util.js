const db = require('../config/db');

const viewTable = (tableName, cb) => {
  db.query(`SELECT * FROM ${tableName} `, (err, result) => {
    if (err) throw new Error(err);
    console.table(result);
    cb();
  });
};

module.exports = viewTable;
