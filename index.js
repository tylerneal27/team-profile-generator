const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const {buildHtml} = require('./src/template.js')
const employees = [];
const distDir = './dist';

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
    const {managerName, managerId, managerEmail, managerOfficeNumber} = managerPrompt;
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
    employees.push(manager);
    anotherEmployee().then(() => {
      const html = buildHtml(employees);
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir)
      }
      fs.writeFile(`${distDir}/team.html`, html, (err) => {
        err ? console.log(err) : console.log('Successfully created team!')
      });
      return;
    });
  });
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
      return promptEngineer().then((engineer) => {
        employees.push(engineer);
        return anotherEmployee();
      })
      
    } else if (teamPrompt.employeeType === 'Intern') {
      return promptIntern().then((intern) => {
        employees.push(intern);
        return anotherEmployee();
      })
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
    const {engineerName, engineerId, engineerEmail, engineerGitHub} = engineerPrompt;
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
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

