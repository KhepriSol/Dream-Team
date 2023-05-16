const generateTeam = team => {
    const generateManager = manager => {
      return `
        <div class="card employee-card">
          <div class="card-header team-card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group team-list">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      `;
    };
  
    const generateEngineer = engineer => {
      return `
        <div class="card employee-card">
          <div class="card-header team-card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 >${engineer.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group team-list">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      `;
    };
  
    const generateIntern = intern => {
      return `
        <div class="card employee-card">
          <div class="card-header team-card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group team-list">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      `;
    };
  
    const html = [];
  
    html.push(
      team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );
    html.push(
      team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
  
  module.exports = team => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
        <div class="container-fluid">
        <div>
        <div class=" jumbotron  team-heading">
        <h1>My Team</h1>
        </div>
        </div>
        </div>
        <div class="container">
        <div>
        <div class="team-area">
        ${generateTeam(team)}
        </div>
        </div>
        </div>
        </body>
        </html>
        `;
        };