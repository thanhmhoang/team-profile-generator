const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./Develop/util/generateHtml")
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");

const team = [];

function managerPrompt() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your employee ID number?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is your office number?",
        }]
) .then(function(res){
    const newManager = new Manager(res.name, res.id, res.email, res.officeNumber)
    team.push(newManager)
    menu()
})
}

function menu() {
    inquirer.prompt(
        {
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["add Engineer", "add Intern", "Finished adding team"]
        },
    ) .then(function(res){
        if (res.action === "add Engineer") {
        addEngineer()
        } 
        if (res.action === "add Intern") {
        addIntern()
        }
        if (res.action === "Finished adding team") {
        let html = generateHTML(team)
        fs.writeFileSync("./team.html", html)
        }
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your employee ID number?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "github",
            type: "input",
            message: "What is your GitHub username?",
        }]
) .then(function(res){
    const newEngineer = new Engineer(res.name, res.id, res.email, res.github)
    team.push(newEngineer)
    menu()
})
}

function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your employee ID number?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "school",
            type: "input",
            message: "What school are you attending?",
        }]
) .then(function(res){
    const newIntern = new Intern (res.name, res.id, res.email, res.school)
    team.push(newIntern)
    menu()
})
}

managerPrompt();