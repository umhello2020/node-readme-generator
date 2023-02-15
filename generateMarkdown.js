// function to render the license badges based on the selected license
function renderLicenseBadge(license) { 
  let licenseBadge = ""
  if (license === 'none') {
    return licenseBadge;
  } else if (license === 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache') {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'GPL v2') {
    licenseBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
  } else if (license === 'BSD 3-Clause') {
    licenseBadge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  }
  return `${licenseBadge}`;
}

// function to provide the link based on the selected license
function renderLicenseLink(license) {
  let licenseLink = ""
  if (license === 'none') {
    return licenseLink;
  } else if (license === 'MIT') {
    licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (license === 'Apache') {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === 'GPL v2') {
    licenseLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
  } else if (license === 'BSD 3-Clause') {
    licenseLink = `https://opensource.org/licenses/BSD-3-Clause`;
  }
  return `${licenseLink}`;
}

// function to insert a pre-made section based on the selected license
function renderLicenseSection(license) { 
  let licenseSection = "";
  if (license === 'none') {
    licenseSection = `This application is not covered under a license.`;
  } else if (license === 'MIT') {
    licenseSection = `This application is covered under the MIT License. For further explanation of what this license does please visit this provided link: `
  } else if (license === 'Apache') {
    licenseSection = `This application is covered under the Apache 2.0 License. For further explanation of what this license does please visit this provided link: `
  } else if (license === 'GPL v2') {
    licenseSection = `This application is covered under the GPL v2 License. For further explanation of what this license does please visit this provided link: `
  } else if (license === 'BSD 3-Clause') {
    licenseSection = `This application is covered under the BSD 3-Clause License. For further explanation of what this license does please visit this provided link: `
  }
  return `${licenseSection}`;
}

// function to generate the content of the README based on user input
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}
            
## Description
    
${data.description}
    
## Table of Contents
[Title](#-${data.title})

[Description](##-description)
  
[Installation Instructions](##-installation)

[Usage Information](##-usage)

[License](##-license)

[Contribution Guidelines](##-contributing)

[Test Instructions](##-tests)

[Questions](##-questions)
    
## Installation
    
${data.installation}
            
## Usage
    
${data.usage}
    
## License 
${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
    
## Contributing
    
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
Here is a link to my GitHub profile: [${data.username}](https://github.com/${data.username}).
If you have any additional questions, you may reach me at my email address, ${data.email}. 
  `

}

module.exports = generateMarkdown;
