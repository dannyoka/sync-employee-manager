const { prompt } = require('inquirer');
const viewTable = require('./util');
const db = require('../config/db');

const viewDepartments = (cb) => {
  viewTable('departments', cb);
};

const insertDepartment = ({ name }, cb) => {
  db.query('INSERT INTO departments (name) VALUES (?)', name, (err, result) => {
    if (err) throw new Error(err);
    viewDepartments(cb);
  });
};

const addDepartment = (cb) => {
  prompt([
    {
      name: 'name',
      message: "What is your department's name?",
    },
  ]).then((result) => insertDepartment(result, cb));
};

module.exports = {
  viewDepartments,
  addDepartment,
};
