// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") return ""
  if (license != null) {
    const badge = `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`
    return badge;
  } else return "";


}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") return ""
  return `(https://opensource.org/licenses/${license})`
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`

  if (license == "None") return "";
  else {
    return section;

  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  return `

  # ${data.title}

  ${renderLicenseSection(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  [Description](https://github.com/DaveEstey/README-Generator#description) \n
  [Installation](https://github.com/DaveEstey/README-Generator#installation) \n
  [Usage](https://github.com/DaveEstey/README-Generator#usage) \n
  [License](https://github.com/DaveEstey/README-Generator#license) \n 
  [Badges](https://github.com/DaveEstey/README-Generator#badges) \n
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
 
  ${data.usage}

  ## License
  
  The link to info about the license: ${renderLicenseLink(data.license)}

  ## How to Contribute
  
  ${data.contribute}

  ## Tests
  
  ${data.test}

  ## Questions
  
  If you have any questions please contact me on: \n
  Github: https://github.com/${data.github} \n
  Or by Email: ${data.email}
`;
}

module.exports = generateMarkdown
