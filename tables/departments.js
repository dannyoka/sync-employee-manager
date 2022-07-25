const { prompt } = require('inquirer');
const viewTable = require('./util');
const db = require('../config/db');

const insertDepartment = ({ name }) => {
  db.query('INSERT INTO departments (name) VALUES (?)', name, (err, result) => {
    if (err) throw new Error(err);
    viewDepartments();
  });
};

const addDepartment = () => {
  prompt([
    {
      name: 'name',
      message: "What is your department's name?",
    },
  ]).then(insertDepartment);
};

const viewDepartments = (cb) => {
  viewTable('departments', cb);
};

module.exports = {
  viewDepartments,
  addDepartment,
};
