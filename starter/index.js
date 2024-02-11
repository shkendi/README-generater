const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: 'List any project dependencies here, as well as the commands to be run to install them.',
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



// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
// promptUser()
// .then(data) = fs.writeFileSync('README.md', generateMarkdown(data))
// .then((console.log('Successfully wrote to README.md')))
// .catch((err) => console.log(err))
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Successfully wrote to README.md File...')
        writeToFile('README.md', generateMarkdown({...responses }))
    })
}


// function call to initialize program
init();
