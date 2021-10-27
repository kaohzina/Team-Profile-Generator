const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const createFile = require('./src/createFile')

const teamProfile = [];

function managerContent(){ 
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the team managers full-name?',
    validate: teamManagerNameInput => {
      if (teamManagerNameInput) {
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

])
.then(teamManagerInput => {
  const { name, id, email, officeNumber } = teamManagerInput;
  const manager = new Manager (name, id, email, officeNumber);

  teamProfile.push(manager);
  console.log(manager);
})
};

function newEmployeeContent(){
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
    validate: employeeNameInput => {
      if (employeeNameInput) {
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
    name: 'github',
    message: "Please enter the employee's github username.",
    when: (input) => input.role === "Engineer",
    validate: nameInput => {
        if (nameInput ) {
            return true;
        } else {
            console.log ("Please enter the employee's github username!")
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
    default: false,
  },
])
.then (employeeContent => {
  let { name, id, email, role, github, school, addMember } = employeeContent;
  let employee;

  if (role === 'Engineer') {
    employee = new Engineer (name, id, email, github);
    console.log(employee);
  } else if (role === 'Intern') {
    employee = new Intern(name, id, email, school);
    console.log(employee)
  }

  teamProfile.push(employee);

  if(addMember) {
    return newEmployeeContent(teamProfile);
  } else {
    return teamProfile;
  }
})
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) { console.log(err); return;}
    else {
      console.log("Team profile is created. Check the dist directory.")
    }
  })
};

managerContent()
.then(newEmployeeContent)
.then(teamProfile => {
  return createFile(teamProfile);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
  console.log(err);
   });