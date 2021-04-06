
function renderLicenseBadge(license) {
    if (license) {
        return `[![License: ${license}](https://img.shields.io/badge/License-${license}-Red.svg)]`;
    } else {
        return "";
    }
};

function renderLicenseLink(license) {
    return license ? '- [License](#license)' : "";
    
};

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
[GitHub Profile](${data.github})\
[E-mail](${data.email})

${data.reachingOut}
`;
};

module.exports = generateMarkdown;