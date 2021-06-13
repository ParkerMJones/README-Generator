// TODO: Include packages needed for this application
const fs = require('fs');
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
        message: 'What packages are required?',
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
        message: 'Instructions for usage',
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
            choices: ['MIT', 'ISC', 'GPLv3', 'None']
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
async function init() {
    try {
        const answers = await questions();
        generateMarkdown(answers);
        writeToFile("README.md", generateMarkdown(answers));
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
