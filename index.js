const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function askQuestions() {
    inquirer.prompt(
        {
            name: "employeeTitle",
            type: "list",
            message: "What is the title of the employee you are adding to your team?",
            choices: ["Manager", "Engineer", "Intern"]
        }
)}