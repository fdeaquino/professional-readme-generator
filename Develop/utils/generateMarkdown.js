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
  return `
  # ${data.title}
  ${data.username}

  ## Table of Contents
  -[Project Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Licenses](#Licenses) 
  -[Contribution](#Contribution)
  -[Testing](#Testing)

  ## Description
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
  ${data.email}
  ${data.github}

  ##__
  ${__}
`;
}

module.exports = generateMarkdown;
