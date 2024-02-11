const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please name your Project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Write your GitHub username.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license applicable to this project.',
        choices: ['MIT', 'APACHE 2.0', 'GPL-3.0', 'GPL-2.0', 'GPL', 'AFL-3.0', 'BSL-1.0', 'Artistic-2.0', 'MS-PL', 'MPL-2.0', '	PostgreSQL', 'Unlicense', 'OSL-3.0', 'none'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'State the languages or technologies associated with this project.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Write your full name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide a valid email address.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors. (Use GitHub usernames).',
        default: '',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide walkthrough of required tests if applicable.',
    },
];

// function to write a README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize the program
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log('Successfully wrote to README.md File...')
        return writeToFile('README.md', generateReadme((responses)))
    })
    .then(() => {
        console.log('README.md file successfully generated.')
    })
    .catch((err) => {
        console.error(err)
    })
}


// function that calls to initialize the program
init();
