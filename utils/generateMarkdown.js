// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != null){
    const badge = `![License: IPL 1.0](https://img.shields.io/badge/License-${license}-blue.svg)]`
    return badge;
  } else return "";

  
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
`(https://opensource.org/licenses/${license})`
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
const section = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`

  if (license == null) return "";
else {
  return section;

} 
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  return `
  # ${data.name}

  ## Table of Contents
  [Description](https://github.com/DaveEstey/README-Generator#description)
  [Installation](https://github.com/DaveEstey/README-Generator#installation)
  [Usage](https://github.com/DaveEstey/README-Generator#usage)
  [License](https://github.com/DaveEstey/README-Generator#license)
  [Badges](https://github.com/DaveEstey/README-Generator#badges)
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
 
  ${data.installation}

  ## License
  
  ${renderLicenseSection(data.license)}

  ## Badges
  
  ${data.installation}

  ## How to Contribute
  
  ${data.installation}

  ## Tests
  
  ${data.test}

  ## Questions
  
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown
