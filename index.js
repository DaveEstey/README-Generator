
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project named?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project. \n(Ie.- What was your motivation? \n- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")\n- What problem does it solve?\n- What did you learn?)'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install what is needed for your project?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the instructions for testing?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how to use your project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick the license your project uses.',
    choices: ["None","MIT", "Apache-2.0", "EPL-1.0", "MPL-2.0"]

  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can someone contribute to your project?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can someone test your project'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
  },
]




// Make the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => console.error(err))
}

// make prompts when app is run
function init() { }
inquirer.prompt(questions)
  .then((data) => writeToFile("README.md", data))
  .then(() => console.log("Your README file has been generated!"))
  .catch((err) => console.error(err))

// run the app
init();
