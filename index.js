import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import generateTeam from "./src/template.js";

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamArray = [];

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }
    ])
    .then(({ addEmployeePrompt }) => {
      if (addEmployeePrompt === "No more team members are needed.") {
        htmlBuilder();
      } else {
        addEmployee(addEmployeePrompt);
      }
    });
}

function addEmployee(employeeType) {
  const questions = [
    {
      type: "input",
      name: "name",
      message: `What is the ${employeeType.toLowerCase()}'s name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is the ${employeeType.toLowerCase()}'s employee ID number?`
    },
    {
      type: "input",
      name: "email",
      message: `What is the ${employeeType.toLowerCase()}'s email address?`
    }
  ];

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

  inquirer.prompt(questions).then(answers => {
    switch (employeeType) {
      case "Manager":
        teamArray.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        break;
      case "Engineer":
        teamArray.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        break;
      case "Intern":
        teamArray.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        break;
    }
    createTeam();
  });
}

function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();



runApp();