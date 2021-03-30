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
        type: ,
        message: ,
        name: ,
    },
    {
        type: ,
        message: ,
        name: ,
    },
    {
        type: ,
        message: ,
        name: ,
    }
]