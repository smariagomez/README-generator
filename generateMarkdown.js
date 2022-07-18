// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  
  ## Credits
  ${data.credits}
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions

  Below is a link to my GitHub profile along with a link to my email.
  GitHub Profile:\n
  ${data.questions1}\n
  ${data.questions2}
`;
}

module.exports = generateMarkdown;

//Text below was added as the default to the the index.js
// Please review the [Contributor Covenant](https://www.contributor-covenant.org/) for guidlines on how to contribute to this application.

//Lines 70 and below were deleted from the generateMarkdown.js README template
// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
// ## Badges
// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
// ## Features
// If your project has a lot of features, list them here.
