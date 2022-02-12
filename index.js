// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

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
                }
            }
        },
        {
            type: 'input',
            name: 'description',
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
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'collabrators',
            message: 'Please list your collaborators?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for your project?',
            choices: ['GNU', 'MIT'],
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])

};


// TODO: Create a function to initialize app
function init() {
    questions()
        .then((inquirerResponse) => {
            console.log("ReadMe File is complete");
            console.log(inquirerResponse);

            // console.log(markdown(inquirerResponse));
            fs.writeFileSync("ReadME.md", markdown({ ...inquirerResponse }));
        })
        .catch(err => {
            console.log(err)
        });
}

// Function call to initialize app
init();
