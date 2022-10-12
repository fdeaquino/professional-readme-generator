// TODO: Include packages needed for this application
//Should I use VAR(from inquirer 8.2.4 documentation) or CONST (bc instructor said to stop using var)??
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title', //should the value be title since line16 in generateMarkdown.js is 'data.title'?
        message: "What is the name of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your project.');
                return false;
            }
        }
    },
    {
        // Come back to revise Installation Instructions
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please describe how to install your project.');
                return false;
            }
        }
    },
    {
        // Come back to Usage Information
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how to use your project.');
                return false;
            }
        }
    },
    {
        // Come back to revise license information (Should this be checkboxes?)
        type: 'checkbox',
        name: 'licenses',
        message: 'What license does your project have? (Choose one)',
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BSD 3', 'None']
    },
    {
        // Come back to Contribution guidelines
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project? Please enter their GitHub usernames. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Who were the contributers to this project?');
                return false;
            }
        }
    },
    {
        // Come back to Tests
        type: 'input',
        name: 'tests',
        message: 'What is the test process for this project? (Required)', 
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please describe the testing process of your project.');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(filename, data) {

 }

// TODO: Create a function to initialize app
function init() {
   return inquirer.prompt(questions)
    .then((data) => {
        const mark = generateMarkdown(data);
        fs.writeFile('./develop/README.md', mark, err => {
            if (err) {
                console.log('Could not save README.md file')
            } else {
                console.log('Success: new README.md file generated inside the develop folder.')
            }
        })
        console.log(data);
        // return data
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();




// console.log("Hello Node!");



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// WHEN I enter my project title
// THEN this is displayed as the title of the README


// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile


// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
