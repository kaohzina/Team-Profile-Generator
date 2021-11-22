const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createFile = require("./src/createFile");

const teamProfile = [];

function managerContent() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team managers full-name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team managers employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team managers email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team managers office number?",
      },
    ])
    .then((managerInput) => {
      const manager = new Manager(
        managerInput.name,
        managerInput.id,
        managerInput.email,
        managerInput.officeNumber
      );

      teamProfile.push(manager);
      console.log(manager);
    });
}

function newEmployeeContent() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeRole",
        message: "What position does this employee have?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employees full-name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employees email address?",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the school the intern is enrolled at.",
        when: (role) => role.employeeRole === "Intern",
      },
      {
        type: "confirm",
        name: "addMember",
        message: "Would you like to add a new team member?",
        default: false,
      },
    ])
    .then((employeeContent) => {
      let { name, id, email, role, github, school, addMember } =
        employeeContent;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamProfile.push(employee);

      if (addMember) {
        return newEmployeeContent(teamProfile);
      } else {
        return teamProfile;
      }
    });
}

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team profile is created. Check the dist directory.");
    }
  });
};

managerContent()
  .then(newEmployeeContent)
  .then((teamProfile) => {
    return createFile(teamProfile);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
