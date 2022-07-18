// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
    //1)Title of project 
    // 2)Description 
    // 3)Table of Contents 
    // 4)Installation 
    // 5)Usage 
    // 6)License 
    // 7)Contributing 
    // 8)Tests 
    // 9)Questions
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
    message: 'Write the instruction and provide examples for use. Include screenshots.',
    name: 'usage',
    type: 'input',
},
{
    message: '1)List your collaborators, if any with links to their GitHub profiles. 2)List any third-party assets that require attribution, list the creators with link to their primary web presence in this section. 3)Include links to tutorials that were followed to complete your project.',
    name: 'credits',
    type: 'input',
},
{
    message: 'Write the guidelines for contributing to this application. If left blank this will default to Contributor Covenant linked below.',
    name: 'contributing',
    type: 'input',
    default: ' Please review the [Contributor Covenant](https://www.contributor-covenant.org/) for guidlines on how to contribute to this application.'
},
{
    message: 'Incled any tests you have written for your application. Then provide examples on how to run them here.',
    name: 'tests',
    type: 'input',
    default: 'At this time, no tests have been written for this application.'
},
{
    message: 'Enter in your GitHub profile name along with the https://.',
    name: 'questions1',
    type: 'input',
},
{
    message: 'Include an email contact link. Type Email me at: emailname@emailhost.com',
    name: 'questions2',
    input: 'type',
}
];


//console.log(ans)
// TODO: Create a function to write README file
//Answers must feed into appropriate header sections.
//License must be added near the top of the README entitled License that explains which license the application is covered under
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data,(err,data)=>{
            if(err){
                throw err
            }
            console.log("complete")
        })
    }

// TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
        .then(data=>{
writeToFile("./output/README.md",generateMarkdown(data))
        })
    }

// Function call to initialize app
    init();
