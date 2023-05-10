"use strict";

// create the team
var generateTeam = function generateTeam(team) {
  // create the manager html
  var generateManager = function generateManager(manager) {
    return "\n<div class=\"card employee-card\">\n    <div class=\"card-header bg-primary text-white\">\n        <h2 class=\"card-title\">".concat(manager.getName(), "</h2>\n        <h3 class=\"card-title\"><i class=\"fas fa-mug-hot mr-2\"></i>").concat(manager.getRole(), "</h3>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">ID: ").concat(manager.getId(), "</li>\n            <li class=\"list-group-item\">Email: <a href=\"mailto:").concat(manager.getEmail(), "\">").concat(manager.getEmail(), "</a></li>\n            <li class=\"list-group-item\">Office number: ").concat(manager.getOfficeNumber(), "</li>\n        </ul>\n    </div>\n</div>\n        ");
  }; // create the html for engineers


  var generateEngineer = function generateEngineer(engineer) {
    return "\n<div class=\"card employee-card\">\n    <div class=\"card-header bg-primary text-white\">\n        <h2 class=\"card-title\">".concat(engineer.getName(), "</h2>\n        <h3 class=\"card-title\"><i class=\"fas fa-glasses mr-2\"></i>").concat(engineer.getRole(), "</h3>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">ID: ").concat(engineer.getId(), "</li>\n            <li class=\"list-group-item\">Email: <a href=\"mailto:").concat(engineer.getEmail(), "\">").concat(engineer.getEmail(), "</a></li>\n            <li class=\"list-group-item\">GitHub: <a href=\"https://github.com/").concat(engineer.getGithub(), "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(engineer.getGithub(), "</a></li>\n        </ul>\n    </div>\n</div>\n        ");
  }; // create the html for interns


  var generateIntern = function generateIntern(intern) {
    return "\n<div class=\"card employee-card\">\n    <div class=\"card-header bg-primary text-white\">\n        <h2 class=\"card-title\">".concat(intern.getName(), "</h2>\n        <h3 class=\"card-title\"><i class=\"fas fa-user-graduate mr-2\"></i>").concat(intern.getRole(), "</h3>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">ID: ").concat(intern.getId(), "</li>\n            <li class=\"list-group-item\">Email: <a href=\"mailto:").concat(intern.getEmail(), "\">").concat(intern.getEmail(), "</a></li>\n            <li class=\"list-group-item\">School: ").concat(intern.getSchool(), "</li>\n        </ul>\n    </div>\n</div>\n        ");
  };

  var html = [];
  html.push(team.filter(function (employee) {
    return employee.getRole() === "Manager";
  }).map(function (manager) {
    return generateManager(manager);
  }));
  html.push(team.filter(function (employee) {
    return employee.getRole() === "Engineer";
  }).map(function (engineer) {
    return generateEngineer(engineer);
  }).join(""));
  html.push(team.filter(function (employee) {
    return employee.getRole() === "Intern";
  }).map(function (intern) {
    return generateIntern(intern);
  }).join(""));
  return html.join("");
}; // export function to generate entire page


module.exports = function (team) {
  return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n    <title>My Team</title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n        integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"style.css\">\n    <script src=\"https://kit.fontawesome.com/c502137733.js\"></script>\n</head>\n\n<body>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12 jumbotron mb-3 team-heading bg-danger\">\n                <h1 class=\"text-center text-white\">My Team</h1>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"row team-area col-12 d-flex justify-content-center\">\n                ".concat(generateTeam(team), "\n            </div>\n        </div>\n    </div>\n</body>\n</html>\n    ");
};
//# sourceMappingURL=template.dev.js.map
