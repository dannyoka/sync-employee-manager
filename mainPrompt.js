const { prompt } = require('inquirer');
const { addEmployee, viewEmployees } = require('./tables/employees');
const { addDepartment, viewDepartments } = require('./tables/departments');
const { addRole, viewRoles } = require('./tables/roles');

const getMainPromptChoices = () => {
  return [
    { name: 'Add employee', value: 'addEmployee' },
    { name: 'Add department', value: 'addDepartment' },
    { name: 'Add role', value: 'addRole' },
    { name: 'View employees', value: 'viewEmployees' },
    { name: 'View departments', value: 'viewDepartments' },
    { name: 'View roles', value: 'viewRoles' },
    { name: 'Update employee role', value: 'updateEmployee' },
    { name: 'Quit', value: 'quit' },
  ];
};
const mainPrompt = async () => {
  const { choice } = await prompt([
    {
      message: 'What would you like to do?',
      type: 'list',
      choices: getMainPromptChoices(),
      name: 'choice',
    },
  ]);
  handleChoice(choice);
};

const quit = () => {
  console.log('Thank you for using employee manager');
  process.exit();
};

const choiceMap = {
  addEmployee,
  addDepartment,
  addRole,
  viewEmployees,
  viewDepartments,
  viewRoles,
  quit,
};

const handleChoice = async (choice) => {
  await choiceMap[choice]();
  if (choice !== 'quit') {
    mainPrompt();
  }
};

module.exports.mainPrompt = mainPrompt;
