
//pulls the use of the file system, inquirer, and the generateMarkdown file.
const fs = require("fs");
const inquirer = require("inquirer");
const MarkdownGenerator = require("./generateMarkdown");

//Array of questions declared and given value.
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What was your motivation for the project?",
        name: "motivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "why",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "solve",
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn",
    },
    {
        type: "input",
        message: "What makes your project stand out?",
        name: "standout",
    },
    {
        type: "input",
        message: "What is the link to your deployed project?",
        name: "deployed",
    },
    {
        type: "input",
        message: "What are the installation instruction for your project?",
        name: "installation",
        
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What is the relative pathway to your screenshot?",
        name: "screenshot",
    },
    {
        type: "list",
        message: "What license do you choose for your project?",
        name: "license",
        choices: ["Apache%202.0", "GNU%General%Public%License%v3.0", "MIT", "BSD%202", "BSD%203", "Boost%201.0", "CC0%201.0", "EPL%201.0", "GPLv3", "GPL%20v2", "LGPL%20v3", "MPL%202.0", "Unlicense"],
    },
    {
        type: "input",
        message: "What complications did you face during the creation of this project?",
        name: "complications",
    },
    {
        type: "input",
        message: "What features do you plan to implement in the future?",
        name: "features",
    },
    {
        type: "input",
        message: "What are your guidelines for contributing to your project?",
        name: "contribute",
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is the link to your GitHub profile?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What are the instructions for reaching you with additional questions?",
        name: "reachingOut",
    },
];

//initializes the steps to create the README file by prompting the questions to the used in the terminal, creates a READMEgereated.md, takes their responses by exporting them to the generateMarkdown file to be implemented in the template literal with the README syntax, and finally renders the template literal onto the new README file.
function init() {
    inquirer    
        .prompt(questions)
        .then((response) => {
            const data = MarkdownGenerator(response);
            console.log(data);
            fs.writeFile('./READMEgenerated.md', data, (error) => 
                    error ? console.log(error) : console.log("Successfully created your README.md!"))
        })
        .catch(error => {
            if (error) {
                console.log("Couldn't render")
            } else {
                console.log("something else went wrong")
            }
        })
}

//Calls the init function run the functioning of the program.
init();