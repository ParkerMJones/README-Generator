// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const avatar = `https://github.com/${data.name}.png?size=50`;
  const gitHub = `https://github.com/${data.name}`;
  const licenseIcon = `http://img.shields.io/badge/license-${data.license}-blue.svg`;
  const licenceLink = `https://opensource.org/licenses/${data.license}`;
  if (data.confirmCredits === false) {
      data.credits = "";
  }
  if (data.license === "None") {
    data.license = "";
  }


  return `# ${data.title}

  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Tests](#tests)
  - [Contact](#contact)

  ### Installation
  Required to run: ${data.installation}

  ### Usage
  Description: ${data.usage}

  ### Contributors
  ${data.credits}

  ### License
  \n![Badge](${licenseIcon})
  \n${licenceLink}


  ### Tests
  ${data.tests}

  ### Contact
  \n${gitHub}
  \n![Avatar](${avatar})
  \nProject URL: ${data.url}
  \nContact the developer: ${data.email}.

`;

}

module.exports = generateMarkdown;
