const logo = require('asciiart-logo');
const mainPrompt = require('./mainPrompt');

function init() {
  console.log(logo({ name: 'Employee Manager' }).render());
  mainPrompt();
}

init();
