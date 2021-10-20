const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
}

module.exports = Intern