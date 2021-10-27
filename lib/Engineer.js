const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.Github = Github;

  }
  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.Github;
  }
}

module.exports = Engineer;