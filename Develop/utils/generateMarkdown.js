// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if(licenses === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)';
  } else if (licenses === 'GPL: General Public Use License') {
    return '![GPL License](https://img.shields.io/badge/license-GPL-yellow)';
  } else if (licenses === 'Apache License 2.0'){
    return '![Apache License](https://img.shields.io/badge/license-Apache--2.0-blue)';
  } else if (licenses === 'ISC') {
    return '![ISC License](https://img.shields.io/badge/license-ISC-orange)';
  } else {
    return '';
  }
 }

 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses === 'MIT') {
    return 'https://mit-license.org/';
  } else if (licenses === 'GPL: General Public Use License') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  } else if (licenses === 'Apache License 2.0') {
    return 'http://www.apache.org/licenses/LICENSE-2.0';
  } else if (licenses === 'ISC') {
    return 'https://www.isc.org/licenses/';
  } else {
    return '';
  }
 }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (licenses != 'None') {
    return `
## License
[${licenses}](${renderLicenseLink(licenses)})`;
  } else {
    return '';
  }
 }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Project Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#licenses) 
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.licenses}

## Contribution
${data.contribution}

## Testing
${data.tests}

## Questions
If you have questions about this project, please feel free to reach me via [email](${data.email}). ${data.email}

Explore more of my projects on [GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
