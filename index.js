const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");

teamArray = [];

function runApp() {
  createTeam();
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."],
      },
    ])
    .then(handleUserChoice);
}

function handleUserChoice(userInput) {
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
}

function addManager() {
  inquirer
    .prompt([
      { type: "input", name: "managerName", message: "Enter the manager's name:" },
      { type: "input", name: "managerId", message: "Enter the manager's employee ID number:" },
      { type: "input", name: "managerEmail", message: "Enter the manager's email address:" },
      { type: "input", name: "managerOfficeNumber", message: "Enter the manager's office number:" },
    ])
    .then(({ managerName, managerId, managerEmail, managerOfficeNumber }) => {
      teamArray.push(new Manager(managerName, managerId, managerEmail, managerOfficeNumber));
      createTeam();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      { type: "input", name: "engineerName", message: "Enter the engineer's name:" },
      { type: "input", name: "engineerId", message: "Enter the engineer's employee ID number:" },
      { type: "input", name: "engineerEmail", message: "Enter the engineer's email address:" },
      { type: "input", name: "engineerGithub", message: "Enter the engineer's GitHub username:" },
    ])
    .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
      teamArray.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      { type: "input", name: "internName", message: "Enter the intern's name:" },
      { type: "input", name: "internId", message: "Enter the intern's employee ID number:" },
      { type: "input", name: "internEmail", message: "Enter the intern's email address:" },
      { type: "input", name: "internSchool", message: "Enter the school the intern attends:" },
    ])
    .then(({ internName, internId, internEmail, internSchool }) => {
      teamArray.push(new Intern(internName, internId, internEmail, internSchool));
      createTeam();
    });
}

function htmlBuilder() {
  console.log("Team created!");

  fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
}

runApp();
