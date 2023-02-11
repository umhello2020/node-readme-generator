const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {type: "input", message: "What is the title of your project?", name: "title" },
        {type: "input", message: "Please enter a description of your project.", name: "description "},
        {type: "input", message: "Please enter installation instructions for your project.", name: "installation" },
        {type: "input", message: "Please enter usage information for your project.", name: "usage" },
        {type: "input", message: "Please enter contribution guidelines for your project.", name: "contributing" },
        {type: "input", message: "Please enter some test instructions for your project.", name: "tests" },
        {type: "input", message: "What is your GitHub username?", name: "username"},
        {type: "input", message: "What is your email address?", name: "email"}
    ]);
    .then(function(response) {
        console.log("response", response)

        const readMe = `
        # ${response.title}
        
        ## Description

        ${response.description}

        ## Table of Contents
        [Title](#-${response.title})
        [Description](##-description)
        [Installation Instructions](##-installation)
        [Usage Information](##-usage)
        [License] (##-license)
        [Contribution Guidelines](##-contributing)
        [Test Instructions](##-tests)
        [Questions](##-questions)

        ## Installation

        ${response.installation}

        ## Usage

        ${response.usage}

        ## License

        

        ## Contributing

        ${response.contributing}

        ## Tests

        ${response.tests}

        ## Questions
        
        
        ${response.username}
        `
    })
