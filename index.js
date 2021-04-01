const fs = require("fs");
const inquirer = require("inquirer");


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
        choices: ["Apache License 2.0", "GNY General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License v2.0", "The Unlicense"],
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


console.log(questions);



function init() {
    inquirer    
        .prompt(questions)
        .then((response) => {
            fs.writeFile('./README/README.md', 
`
# ${response.title}
---
## Descriptions
${response.motivation}\
${response.why}\
${response.solve}\
${response.learn}\
${response.standout}
---
## Deployed Link
[Deployed Application URL](${response.deployed})
---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [Complications](#complications)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
---
## Installation
${response.installation}
---
## Usage
${response.usage}\
![screenshot](${response.screenshot})
---
## License
---
## Badges
---
## Complications
${response.complications}
---
## Features
${response.features}
---
## Contribute
${response.contribute}
---
## Tests
${response.tests}
---
## Questions
[GitHub Profile](${response.github})\
[E-mail](${response.email})

${response.reachingOut}
                `, (error) =>
                    error ? console.log(error) : console.log("Successfully created your README.md!"))
        })
    }

    init();