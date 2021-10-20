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