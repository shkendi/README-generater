// create function that returns a license based on which license is passed in
// function renderLicenseBadge(license) {
//   if (license !== 'none') {
//     return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
//   }
//   return ""
// }
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`
  }
  return " "
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Licensed under the ${responses.license} license.`
  }
}

// function to generate markdown for README
function generateReadme(responses) {
  
  return `# ${responses.projectTitle}


  ## Background

  We are to develop a console node application using inquirer to take input from the user and generate a README.md file which can be used in a project.
  
  ## User Story

  AS A developer
  I WANT a README generator
  SO THAT I can quickly create a professional README for a new project
  \`\`\`
  
  ## Acceptance Criteria
  
  Create a command-line application that accepts user input.
  When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:
      The title of my project
      
      Sections entitled:
      Description
      Table of Contents
      Installation
      Usage
      License
      Contributing
      Tests
      Questions
  
  When a user enters the project title, it's displayed as the title of the README.
  
  When a user enters a description, installation instructions, usage information, contribution guidelines,
  and test instructions, this information is added to the sections of the README entitled Description, Installation, 
  Usage, Contributing, and Tests.
  
  When a user chooses a license for their application from a list of options, a badge for that license 
  is added near the top of the README and a notice is added to the section of the README entitled License 
  that explains which license the application is covered under.
  
  When a user enters their GitHub username, it's added to the section of the README entitled Questions, 
  with a link to their GitHub profile.
  
  When a user enters their email address, it's added to the section of the README entitled Questions, 
  with instructions on how to reach them with additional questions.
  
  When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.


## Demo Video : [Walkthrough video]()

## Table of Contents 

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contact-Me](#contact-me)

* [Contributors](#contributors)

* [Testing](#testing)

## Descriptions

${responses.description}

## Installation

${responses.installation}

## Usage

${responses.usage}

## Contact-Me

* Name - ${responses.name}

* Email - ${responses.email}

* Github - [${responses.creator}](https://github.com/${responses.creator}/)

## Contributors

${responses.contributors}

## Testing

To run the test use:

${responses.installation}

## Questions

To see the code walkthrough use my GitHub link: https://github.com/${responses.creator}

You can direct any questions or feedback at : ${responses.email} 


${renderLicenseSection(responses.license)}
`;
}

module.exports = generateReadme;
