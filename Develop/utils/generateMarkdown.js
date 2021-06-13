// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     
//  }

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
function renderLicenseLink(license) {
    
 }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const avatar = `https://github.com/${data.name}.png?size=50`;
  const gitHub = `https://github.com/${data.name}`;
  const licenseIcon = `http://img.shields.io/badge/license-${data.license}-blue.svg`;
  const licenceLink = `https://opensource.org/licenses/${data.license}`;


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
  Description: ${data.usage}

  ### Contributors
  ${data.credits}

  ### License
  ${data.license}
  ![Badge](${licenseIcon})
  \n(${licenceLink})



  ### Tests
  ${data.tests}

  ### Contact
  \n(${gitHub})
  \n![Avatar](${avatar})
  \nProject URL: ${data.url}
  \nContact the developer: ${data.email}.

`;

}

module.exports = generateMarkdown;
