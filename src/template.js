const buildTeam = employees => {
    const buildEngineer = (engineer) => {
        return `
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${engineer.getId()}</li>
              <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
              <li class="list-group-item"><a href="https://gitbub.com/${engineer.getGitHub()}">GitHub: ${engineer.getGitHub()}</a></li>
            </ul>
          </div>
          </div>
        `
    }
    const buildManager = (manager) => {
        return `
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${manager.getId()}</li>
              <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
          </div>
      ` 
    }
    const buildIntern = (intern) => {
        return `
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${intern.getName()}</h5>
              <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${intern.getId()}</li>
              <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
          </div>
        `
    }

    let html = '';

    employees.filter(employee => {
        return employee.getRole() === 'Manager'
    }).map(manager => {
       html += buildManager(manager)
    })
    


    employees.filter(employee => {
        return employee.getRole() === 'Intern'
    }).map(intern => {
        html += buildIntern(intern)
    })
    

    employees.filter(employee => {
        return employee.getRole() === 'Engineer'
    }).map(engineer => {
        html += buildEngineer(engineer)
    })

    return html;
}

  const buildHtml = (employees)  => {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <header class="p-3 mb-2 bg-success text-white"><h1>My Team</h1></header>
    <div class="container-fluid">
        ${buildTeam(employees)}
    </div>
  </body>
</html>
    `
}

module.exports = {
  buildHtml
};
