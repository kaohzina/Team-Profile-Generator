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
    name: 'teamManagerPhoneNumber',
    message: 'What is the team managers office phone number?',
    validate: teamManagerPhoneInput=> {
      if (teamManagerPhoneInput) {
        return true;
      } else {
        console.log("Please enter the team managers office phone number.");
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'addTeamMember',
    message: 'Would you like to add a new team member?',
    validate: addTeamMemberConfirmation => {
      if (addTeamMemberConfirmation) {
        return true;
      } else {
        
        return false;
      }
    }
  },
  {
    type: '',
    name: '',
    message: '',
    validate: => {
      if () {
        return true;
      } else {
        return false;
      }
    }
  },
]
const app = require('./lib/app');

new app().initializeApp();