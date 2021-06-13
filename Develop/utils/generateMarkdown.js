// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadge = ""
 }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
    const licenseIcon = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;


  return `# ${data.title}

  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Tests] (#tests)
  - [Contact](#contact)

  ### Installation
  Required to run: ${data.installation}

  ### Usage
  How To Use This Application: ${data.usage}

  ### Contributors
  ${data.credits}

  ### License
  ${data.license}

  ### Tests
  ${data.tests}

  ### Contact
  \n![Badge](${gitHub})
  \n![Avatar](${avatar})
  \n!Project URL: ${data.url}
  \nContact the developer: ${data.email}.

`;

}

module.exports = generateMarkdown;
