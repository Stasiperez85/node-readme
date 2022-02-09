// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the project title? (Required)',
        //   vaildate to check that user provided title value
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the project title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'Description',
          message: 'Please provide a description of the project!',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please provide a description!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'Installation',
          message: 'What are the steps required to install your project?',
        },
        {
          type: 'input',
          name: 'Usage',
          message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'License',
            message: 'What license did you use for your project',
          }
      ])
    };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
