const { prompt } = require('inquirer');
const viewTable = require('./util');
const db = require('../config/db');

const viewRoles = () => {
  viewTable('roles');
};

const insertRole = ({ title, salary, departmentId }) => {
  db.query(
    'INSERT INTO roles (title, salary, department_id) VALUES (?, ? ,?)',
    [title, salary, departmentId],
    (err, result) => {
      if (err) throw new Error(err);
      viewRoles();
    }
  );
};

const promptRole = (departmentChoices) => {
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
  ]).then(insertRole);
};

const addRole = () => {
  db.query('SELECT * FROM departments', (err, result) => {
    if (err) throw new Error(err);
    const departmentChoices = result.map((department) => {
      return {
        name: department.name,
        value: department.id,
      };
    });
    promptRole(departmentChoices);
  });
};

module.exports = {
  viewRoles,
  addRole,
};
