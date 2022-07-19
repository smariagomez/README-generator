//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

//Array of questions include
// 1)Title of project 
// 2)Description 
// 3)Table of Contents 
// 4)Installation 
// 5)Usage 
// 6)Credits
// 7)License 
// 8)Contributing 
// 9)Tests 
// 10)Questions
//     includes question for GitHub profile name that will need to link
//     email
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'title',
        type: 'input',
    },
    {
        message: 'Describe your project. Include the what, why and how. What was your motivation? What problem did you solve? What did you learn?',
        name: 'description',
        type: 'input',
    },
    {
        message: 'Write the steps required to install your project- should be a comprehensive step-by-step description of how to get the development environment running.',
        name: 'installation',
        type: 'input',
    },
    {
        message: 'Write instructions and provide examples for how to use the application. Screenshots will need to be typed directly into the read me through the appropriate filepath.',
        name: 'usage',
        type: 'input',
    },
    {
        message: '1)List your collaborators, if any with the URL links to their GitHub profiles. 2)List any third-party assets that require attribution, list the creators with link to their primary web presence in this section. 3)Include links to tutorials that were followed to complete your project.',
        name: 'credits',
        type: 'input',
    },
    {
        message: 'Select which license applies to your application.',
        name: 'license',
        type: 'list',
        choices: ['MIT License', 'GNU General Public License v3.0', '']

    },
    {
        message: 'Write the guidelines for contributing to this application. If left blank this will default to Contributor Covenant linked below.',
        name: 'contributing',
        type: 'input',
        default: ' Please review the [Contributor Covenant](https://www.contributor-covenant.org/) for guidlines on how to contribute to this application.'
    },
    {
        message: 'Include any tests you have written for your application. Then provide examples on how to run them here.',
        name: 'tests',
        type: 'input',
        default: 'At this time, no tests have been written for this application.'
    },
    {
        message: 'Enter in your GitHub profile name',
        name: 'GitHub',
        type: 'input',
    },
    {
        message: 'Enter in your primary contact email e.g., user@emailhost.com',
        name: 'questions2',
        input: 'type',
    }
];

//Function to write README file w/ answers populating appropriate header sections.
function writeToFile(fileName, data) {
    console.log (fileName)
    console.log (data)
    fs.writeFile(fileName, data, (err, data) => {
        if (err) {
            throw err
        }
        console.log("complete")
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile("./output/README.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();
