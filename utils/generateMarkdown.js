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
  MIT License
  Copyright (c) 2021 
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  `;
  }
  if (license === 'GNU GPLv3 License') {
    return `
  ## License
  Copyright (C) <year>  <name of author>
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  `;
  }
}

renderLicenseBadge();

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
${renderLicenseBadge(license)}
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

  [MIT License](https://choosealicense.com/licenses/mit/)
  
  ## How to Contribute
  
  ## Github
  ${questions}

  Provide Github username 

  ## Contact
${email}
`;
}

module.exports = generateMarkdown;
