// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
/*   - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn? */
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your project named?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the instructions for testing?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Pick the license your project uses.',
      choices: ["MIT", "Other"]
      
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => err)
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions) 
.then((data) => writeToFile("README.md", data))
.then(() => console.log("Your README file has been generated!"))
.catch((err) => console.error(err))

// Function call to initialize app
init();
