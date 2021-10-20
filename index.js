const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const createFile = require('./src/createFile')

let managerFile = {}
let engineerFile = {}
let internFile = {}

const employees = [];

const managerContent = [
  {
    type: 'input',
    name: 'teamManagerName',
    message: 'What is the team managers full-name?',
    validate: teamManagerInput => {
      if (teamManagerInput) {
        return true;
      } else {
        console.log("Please enter a full name for the team's manager.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'teamManagerId',
    message: 'What is the team managers employee ID?',
    validate: teamManagerIdInput=> {
      if (teamManagerIdInput) {
        return true;
      } else {
        console.log("Please enter the employee ID for this manager.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'teamManagerEmail',
    message: 'What is the team managers email address?',
    validate: teamManagerEmailInput=> {
      if (teamManagerEmailInput) {
        return true;
      } else {
        console.log("Please enter the team managers email addrress.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'teamManagerOfficeNumber',
    message: 'What is the team managers office number?',
    validate: teamManagerOfficeInput=> {
      if (teamManagerOfficeInput) {
        return true;
      } else {
        console.log("Please enter the team managers office number.");
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'addTeamMember',
    message: 'Would you like to add a new team member?',
    default: false
  },
  {
    type: 'checkbox',
    name: 'teamMemberPosition',
    message: 'What position does this team member have?',
    choices: ['Engineer', 'Intern'],
    when: addTeamMember => {
      if (addTeamMember) {
        return true;
      } else {
        return false;
      }  
    }
  },
],

const engineerContent = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the engineers full-name?',
    validate: engineerInput => {
      if (engineerInput) {
        return true;
      } else {
        console.log("Please enter a full name for the engineer.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerId',
    message: 'What is the engineers employee ID?',
    validate: engineerIdInput=> {
      if (engineerIdInput) {
        return true;
      } else {
        console.log("Please enter the employee ID for this engineer.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is the team managers email address?',
    validate: engineerEmailInput=> {
      if (engineerEmailInput) {
        return true;
      } else {
        console.log("Please enter the engineers email addrress.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerOfficeNumber',
    message: 'What is the engineers office number?',
    validate: engineerOfficeInput=> {
      if (engineerOfficeInput) {
        return true;
      } else {
        console.log("Please enter the engineers office number.");
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'addTeamMember',
    message: 'Would you like to add a new team member?',
    default: false
  },
  {
    type: 'checkbox',
    name: 'teamMemberPosition',
    message: 'What position does this team member have?',
    choices: ['Engineer', 'Intern'],
    when: addTeamMember => {
      if (addTeamMember) {
        return true;
      } else {
        return false;
      }  
    }
  },
],

const internContent = [
  {
    type: 'input',
    name: 'internName',
    message: 'What is the interns full-name?',
    validate: internNameInput => {
      if (interNameInput) {
        return true;
      } else {
        console.log("Please enter a full name for the intern.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internsId',
    message: 'What is the interns employee ID?',
    validate: internIdInput=> {
      if (internIdInput) {
        return true;
      } else {
        console.log("Please enter the employee ID for this intern.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is the interns email address?',
    validate: internEmailInput=> {
      if (internEmailInput) {
        return true;
      } else {
        console.log("Please enter the interns email addrress.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internOfficeNumber',
    message: 'What is the interns office number?',
    validate: internOfficeInput=> {
      if (internOfficeInput) {
        return true;
      } else {
        console.log("Please enter the interns office number.");
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'addTeamMember',
    message: 'Would you like to add a new team member?',
    default: false
  },
  {
    type: 'checkbox',
    name: 'teamMemberPosition',
    message: 'What position does this team member have?',
    choices: ['Engineer', 'Intern'],
    when: addTeamMember => {
      if (addTeamMember) {
        return true;
      } else {
        return false;
      }  
    }
  },
],

const engineerQuestions = function() {
  return inquirer
  .prompt(engineerContent).then(response => {
    engineerFile = response;
    const newEngineer = new Engineer(response.name, response.id, response.email);
  })
}
const app = require('./lib/app');

new app().initializeApp();