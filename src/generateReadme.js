const fs = require('fs')
const getLicenses = require("./licenses")

const generateReadme = (userInput) => {

    console.log(userInput)

    let features = ""

    for(let feat of userInput.features){
        features += `* ${feat}\n`
    }

    let readme = `# ${userInput.title}
 ${userInput.includeLicense ? `<img src="https://img.shields.io/badge/License-${userInput.license}-blue" alt={""}>`:""}

## Description 

${userInput.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${userInput.installation}


## Usage 

${userInput.usage}


## Credits

${userInput.credits}

${userInput.includeLicense ? 
        `## License

        ${getLicenses(userInput.license,userInput.fullName,userInput.title,userInput.description)}`:""}


## Features

${features}


## Contributing

${userInput.howToContribute}


## Tests

${userInput.tests}

## Questions

Find me on github here: [here](http://github.com/${userInput.questions})

If you have any additional question feel free to email me at [${userInput.email}}(mailto:${userInput.email})
`

    fs.writeFile('README.md',readme,(error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("File has been created")
        }
    })

}

module.exports = generateReadme