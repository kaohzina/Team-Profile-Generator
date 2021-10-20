const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

module.exports = Engineer