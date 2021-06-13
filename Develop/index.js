// TODO: Include packages needed for this application
const fs = require('fs');
// const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {   type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please provide a title for your project.")
            }
        }
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is the GitHub URL of your project?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give instructions for installation',
        validate: instructionInput => {
            if (instructionInput) {
                return true;
            } else {
                console.log("Please provide installation instructions.");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give instructions for usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please give detailed usage instructions.");
                return false;
            }
         }
        },
    {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to add contributors?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Add some contributors.',
            when: ({ confirmCredits }) => confirmCredits
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which licensing applies?',
            choices: ['MIT', 'Apache', 'Creative Commons', 'ISC', 'None']
        },
        {   
            type: 'input',
            name: 'tests',
            message: 'Describe any tests run on the application'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide an email address'
        } 
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    const answers = questions();
    generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown(answers));
};

// Function call to initialize app
init();
