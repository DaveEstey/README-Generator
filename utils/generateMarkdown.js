// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != null){
    const badge = `![License: IPL 1.0](https://img.shields.io/badge/License-${license}-blue.svg)]`
    return badge;
  } else return null;

  
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
`(https://opensource.org/licenses/${license})`
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  return `
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ## License

  ## Badges
  
  ## How to Contribute
    
  ## Tests
  
  ## Questions
`;
}

module.exports = generateMarkdown
