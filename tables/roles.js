const { prompt } = require('inquirer');
const viewTable = require('./util');
const db = require('../config/db');

const viewRoles = (cb) => {
  viewTable('roles', cb);
};

const insertRole = ({ title, salary, departmentId }, cb) => {
  db.query(
    'INSERT INTO roles (title, salary, department_id) VALUES (?, ? ,?)',
    [title, salary, departmentId],
    (err, result) => {
      if (err) throw new Error(err);
      viewRoles(cb);
    }
  );
};

const promptRole = (departmentChoices, cb) => {
  prompt([
    {
      message: 'What is your role title?',
      name: 'title',
    },
    {
      message: 'What is your role salary?',
      name: 'salary',
    },
    {
      message: 'What department does your role belong to?',
      name: 'departmentId',
      type: 'list',
      choices: departmentChoices,
    },
  ]).then((result) => insertRole(result, cb));
};

const addRole = (cb) => {
  db.query('SELECT * FROM departments', (err, result) => {
    if (err) throw new Error(err);
    const departmentChoices = result.map((department) => {
      return {
        name: department.name,
        value: department.id,
      };
    });
    promptRole(departmentChoices, cb);
  });
};

module.exports = {
  viewRoles,
  addRole,
};
