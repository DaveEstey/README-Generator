// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const genMD = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your project named?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'dropdown',
      name: 'license',
      
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
