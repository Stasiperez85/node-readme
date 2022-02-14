// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ""
  }
}

// Puts a link to the license
const renderLicenseLink = (license) => {
  if (!license) {
    return '';
  }
  if (license === 'MIT License') {
    return `
  ## License Link
  [MIT License](https://choosealicense.com/licenses/mit/)
  `;
  }
  if (license === 'GNU GPLv3 License') {
    return `
  ## License Link
  [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
  `;
  }
}

// Add the license text to the README
const renderLicenseSection = (license) => {
  if (!license) {
    return '';
  }
  if (license === 'MIT License') {
    return `
  ## License 
  Copyright (C) 2022
  `;
  }
  if (license === 'GNU GPLv3 License') {
    return `
  ## License
  Copyright (C) 2022
  `;
  }
}

renderLicenseBadge();

renderLicenseLink();

renderLicenseSection();

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, collabrators, license, questions, email }) {

  return `
  # ${title}


  ## Description
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${installation}


  ## Usage
  ${usage}

  Clink link to view video of how to generate readme file.

  <https://watch.screencastify.com/v/9jkSlAQHGNcQh7BN4S0l>

  ## Credits
  ${collabrators}

  ## License
  ${license}
  Copyright (C) 2022

  ## Badges
  ${renderLicenseBadge(license)}
  
  ## How to Contribute
  
  ## Github
  ${questions}
  

  ## Contact
${email}

## GitHub Links
<https://github.com/Stasiperez85/node-readme>

`;
}

module.exports = generateMarkdown;
