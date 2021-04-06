
//function used to return the badge for the license the user chose for their project or returns empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License: ${license}](https://img.shields.io/badge/License-${license}-Red.svg)`;
    } else {
        return "";
    }
};

//function used to return the license link in the table of contents or returns an empty string
function renderLicenseLink(license) {
    return license ? '- [License](#license)' : "";
};

//function used to return the license section in the READMEgenerated.md or returns an empty string
function renderLicenseSection(license) {
    if (license) {
        return `
## License
---
This project is licensed under the ${license} license.
`;
    }
    return "";
};

//function used to take all the responses from the user and the returned values from the above functions to generate the new README file
function generateMarkdown(data) {
    return`
# ${data.title}
${renderLicenseBadge(data.license)}
---
## Descriptions
---
${data.motivation}\
${data.why}\
${data.solve}\
${data.learn}\
${data.standout}
## Deployed Link
---
[Deployed Application URL](${data.deployed})
## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Complications](#complications)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
---
${data.installation}
## Usage
---
${data.usage}\
![screenshot](${data.screenshot})
${renderLicenseSection(data.license)}
## Complications
---
${data.complications}
## Features
---
${data.features}
## Contribute
---
${data.contribute}
## Tests
---
${data.tests}
## Questions
---
[GitHub Profile](${data.github})

E-mail: ${data.email}

${data.reachingOut}
`;
};

//exports the returned template literal from the generateMarkdown function
module.exports = generateMarkdown;