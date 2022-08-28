const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./classes/Manager.js')
const Intern = require('./classes/Intern.js')
const Engineer = require('./classes/Engineer.js')
const Employee = require('./classes/Employee.js')
const employeeBucket = []

const init = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Manager Name',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'Enter Manager ID',
      name: 'managerId'

    },
    {
      type: 'input',
      message: 'Enter Manager email',
      name: 'managerEmail'

    },
    {
      type: 'input',
      message: 'Enter Manager Office Number',
      name: 'managerOfficeNumber'
    },
  ]) .then((Manager) => {
    console.log(Manager);
    const {managerName, managerId, managerEmail, managerOfficeNumber} = Manager
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
    employeeBucket.push(manager)
    console.log(employeeBucket);
    anotherEmployee()
  })
}
init()
const anotherEmployee = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'would you like to add any more team members?',
      name: 'addEmployee',
      choices: ['Engineer', 'Intern'],
    }
  ])
}