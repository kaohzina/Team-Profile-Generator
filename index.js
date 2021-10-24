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

const managerContent = () => { 
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
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
    name: 'id',
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
    name: 'email',
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
    name: 'officeNumber',
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
    name: 'addMember',
    message: 'Would you like to add a new team member?',
    default: false
  },
  {
    type: 'checkbox',
    name: 'memberRole',
    message: 'What position does this team member have?',
    choices: ['Engineer', 'Intern'],
    when: addMember => {
      if (addMember) {
        return true;
      } else {
        return false;
      }  
    }
  },
])
},
const newEmployeeContent = () => {
  return inquirer.prompt([
  {
    type: 'list',
    name: 'employeeRole',
    message: 'What position does this employee have?',
    choices: ['Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the employees full-name?',
    validate: engineerInput => {
      if (engineerInput) {
        return true;
      } else {
        console.log("Please enter a full name for the employee.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the employee ID?',
    validate: employeeId => {
      if ( employeeId) {
        return true;
      } else {
        console.log("Please enter the employee ID.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the employees GitHub username?',
    validate: employeeGithub => {
      if ( employeeGithub) {
        return true;
      } else {
        console.log("Please enter the employee GitHub username.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the employees email address?',
    validate: employeeEmail => {
      if (employeeEmail) {
        return true;
      } else {
        console.log("Please enter the employees email addrress.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the employees office number?',
    validate: employeeOfficeNumber => {
      if (employeeOfficeNumber) {
        return true;
      } else {
        console.log("Please enter the employees office number.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter the school the intern is enrolled at.',
    when: (role) => role.employeeRole === 'Intern',
    validate: schoolName => {
      if(schoolName) {
        return true;
      } else {
        console.log("Provide the school the intern is attending.")
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'addMember',
    message: 'Would you like to add a new team member?',
    default: false
  },
])
}
async function init(){
  const data = await newEmployeeContent();
  const generateReadMe = generateMarkdown(data)
  fs.writeFile('./dist/README.md', generateReadMe, err => {
    if (err) { reject(err); return;}
  });
};


const engineerQuestions = function() {
  return inquirer
  .prompt(engineerContent).then(response => {
    engineerFile = response;
    const newEngineer = new Engineer(response.name, response.id, response.email);
  })
}
const app = require('./lib/app');

new app().initializeApp();

init();