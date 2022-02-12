// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, collabrators, license, questions, email }) {
  // console.log(data);
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
  
  ## Credits
  ${collabrators}

  ## License
  ${license}

  ## Badges
  
  ## How to Contribute
  
  ## Github
  ${questions}

  Provide Github username 

  ## Contact
${email}
`;
}

module.exports = generateMarkdown;
