const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [ 
    {type: "input", message: "What is the title of your project?", name: "title" },
    {type: "input", message: "Please enter a description of your project.", name: "description "},
    {type: "input", message: "Please enter installation instructions for your project.", name: "installation" },
    {type: "input", message: "Please enter usage information for your project.", name: "usage" },
    {type: "list", choices: ['MIT', 'Adobe', 'none'], message: "What Markdown License have you applied to your project?", name: 'license'},
    {type: "input", message: "Please enter contribution guidelines for your project.", name: "contributing" },
    {type: "input", message: "Please enter some test instructions for your project.", name: "tests" },
    {type: "input", message: "What is your GitHub username?", name: "username"},
    {type: "input", message: "What is your email address?", name: "email"}
];

function init() {

    inquirer
        .prompt(questions);
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response))
        })
}


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) console.error(err);
    })
}

init();
