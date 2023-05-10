"use strict";

var Manager = require("./lib/Manager.js");

var Engineer = require("./lib/Engineer.js");

var Intern = require("./lib/Intern.js");

var inquirer = require("inquirer");

var path = require("path");

var fs = require("fs");

var OUTPUT_DIR = path.resolve(__dirname, "output");
var outputPath = path.join(OUTPUT_DIR, "team.html");

var generateTeam = require("./src/template.js");

teamArray = [];

function runApp() {
  function createTeam() {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch (userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;

        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    });
  } //Prompts to ask the person


  function addManager() {
    inquirer.prompt([{
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    }, {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID number?"
    }, {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?"
    }, {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }]).then(function (_ref) {
      var managerName = _ref.managerName,
          managerId = _ref.managerId,
          managerEmail = _ref.managerEmail,
          managerOfficeNumber = _ref.managerOfficeNumber;
      teamArray.push(new Manager(managerName, managerId, managerEmail, managerOfficeNumber));
      createTeam();
    });
  }

  function addEngineer() {
    inquirer.prompt([{
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    }, {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's employee ID number?"
    }, {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?"
    }, {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    }]).then(function (_ref2) {
      var engineerName = _ref2.engineerName,
          engineerId = _ref2.engineerId,
          engineerEmail = _ref2.engineerEmail,
          engineerGithub = _ref2.engineerGithub;
      teamArray.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([{
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    }, {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?"
    }, {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    }, {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?"
    }]).then(function (_ref3) {
      var internName = _ref3.internName,
          internId = _ref3.internId,
          internEmail = _ref3.internEmail,
          internSchool = _ref3.internSchool;
      teamArray.push(new Intern(internName, internId, internEmail, internSchool));
      createTeam();
    });
  }

  function htmlBuilder() {
    console.log("Team created!");
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  createTeam();
}

runApp();
//# sourceMappingURL=index.dev.js.map
