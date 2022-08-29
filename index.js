import  inquirer  from 'inquirer';
import fs from 'fs';
import Manager from './classes/Manager.js';
import Intern from './classes/Intern.js';
import Engineer from './classes/Engineer.js';
import Employee from './classes/Employee.js';
const employees = [];

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
  ]).then((managerPrompt) => {
    console.log(managerPrompt);
    const {managerName, managerId, managerEmail, managerOfficeNumber} = managerPrompt;
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
    employees.push(manager);
    console.log(employees);
    anotherEmployee();
  })
}

init()

const anotherEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'would you like to add any more team members?',
      name: 'employeeType',
      choices: ['Engineer', 'Intern', 'finish building my team'],
    }
  ]).then((teamPrompt) => {

    if (teamPrompt.employeeType === 'Engineer') {
      const engineer = promptEngineer();
      employees.push(engineer);
      anotherEmployee();
    } else if (teamPrompt.employeeType === 'Intern') {
      const intern = promptIntern();
      employees.push(intern);
      anotherEmployee();
    } else {
      return
    }
  })
}

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Engineer Name',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'Enter Engineer ID',
      name: 'engineerId'

    },
    {
      type: 'input',
      message: 'Enter Engineer email',
      name: 'engineerEmail'

    },
    {
      type: 'input',
      message: 'Enter Engineer\'s GitHub',
      name: 'engineerGitHub'
    },
  ]).then((engineerPrompt) => {
    const {engineerName, engineerId, engineerEmail, engineerSchool} = engineerPrompt;
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerSchool);
    return engineer
  })
}

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Intern Name',
      name: 'internName'
    },
    {
      type: 'input',
      message: 'Enter intern ID',
      name: 'internId'

    },
    {
      type: 'input',
      message: 'Enter intern email',
      name: 'internEmail'

    },
    {
      type: 'input',
      message: 'Enter intern\'s school',
      name: 'internSchool'
    },
  ]).then((internPrompt) => {
    const {internName, internId, internEmail, internSchool} = internPrompt;
    const intern = new Intern(internName, internId, internEmail, internSchool);
    return intern;
  })
}

