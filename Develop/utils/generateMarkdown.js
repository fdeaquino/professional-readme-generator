// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licenses](#licenses) 
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Project Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses
${data.licenses}

## Contribution
${data.contribution}

## Testing
${data.tests}

## Questions
If you have questions about this project, please feel free to reach out via email. ${data.email}

Explore my projects at [GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
