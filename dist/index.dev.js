"use strict";

var _Manager = _interopRequireDefault(require("./lib/Manager.js"));

var _Engineer = _interopRequireDefault(require("./lib/Engineer.js"));

var _Intern = _interopRequireDefault(require("./lib/Intern.js"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _template = _interopRequireDefault(require("./src/template.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OUTPUT_DIR = _path["default"].resolve(__dirname, "output");

var outputPath = _path["default"].join(OUTPUT_DIR, "team.html");

var teamArray = [];

function createTeam() {
  _inquirer["default"].prompt([{
    type: "list",
    message: "What type of employee would you like to add to your team?",
    name: "addEmployeePrompt",
    choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
  }]).then(function (_ref) {
    var addEmployeePrompt = _ref.addEmployeePrompt;

    if (addEmployeePrompt === "No more team members are needed.") {
      htmlBuilder();
    } else {
      addEmployee(addEmployeePrompt);
    }
  });
}

function addEmployee(employeeType) {
  var questions = [{
    type: "input",
    name: "name",
    message: "What is the ".concat(employeeType.toLowerCase(), "'s name?")
  }, {
    type: "input",
    name: "id",
    message: "What is the ".concat(employeeType.toLowerCase(), "'s employee ID number?")
  }, {
    type: "input",
    name: "email",
    message: "What is the ".concat(employeeType.toLowerCase(), "'s email address?")
  }];

  switch (employeeType) {
    case "Manager":
      questions.push({
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
      });
      break;

    case "Engineer":
      questions.push({
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
      });
      break;

    case "Intern":
      questions.push({
        type: "input",
        name: "school",
        message: "What school does the intern attend?"
      });
      break;
  }

  _inquirer["default"].prompt(questions).then(function (answers) {
    switch (employeeType) {
      case "Manager":
        teamArray.push(new _Manager["default"](answers.name, answers.id, answers.email, answers.officeNumber));
        break;

      case "Engineer":
        teamArray.push(new _Engineer["default"](answers.name, answers.id, answers.email, answers.github));
        break;

      case "Intern":
        teamArray.push(new _Intern["default"](answers.name, answers.id, answers.email, answers.school));
        break;
    }

    createTeam();
  });
}

function htmlBuilder() {
  console.log("Team created!");

  _fs["default"].writeFileSync(outputPath, (0, _template["default"])(teamArray), "UTF-8");
}

createTeam();
runApp();
//# sourceMappingURL=index.dev.js.map
