const { prompt } = require('inquirer');
const viewTable = require('./util');
const db = require('../config/db');

const viewEmployees = () => {
  viewTable('employees');
};

const insertEmployee = ({ firstName, lastName, roleId, managerId }) => {
  db.query(
    'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
    [firstName, lastName, roleId, managerId],
    (err, result) => {
      if (err) throw new Error(err);
      viewEmployees();
    }
  );
};

const promptEmployee = (roleChoices, managerChoices) => {
  prompt([
    {
      message: "What is your employee's first name?",
      name: 'firstName',
    },
    {
      message: "What is your employee's last name?",
      name: 'lastName',
    },
    {
      message: "What is your employee's role?",
      type: 'list',
      name: 'roleId',
      choices: roleChoices,
    },
    {
      message: "Who is your employee's manager?",
      type: 'list',
      name: 'managerId',
      choices: managerChoices,
    },
  ]).then(insertEmployee);
};

const addEmployee = () => {
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) throw new Error(err);
    db.query('SELECT * FROM roles', (err, roles) => {
      if (err) throw new Error(err);
      const employeeChoices = employees.map((employee) => {
        return {
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        };
      });
      const roleChoices = roles.map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
      promptEmployee(roleChoices, employeeChoices);
    });
  });
};

module.exports = { addEmployee, viewEmployees };
