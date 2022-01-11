const inquirer = require('inquirer')

// table of contents,
//
// title,
//     description,
//      installation, usage, license, contributing, tests, questions
//
// a badge of the license goes up top
// questions  isplays a link to my github profile with instructions on how to reach me


let questions = [
    {
        message: "What is your full name?",
        type: "input",
        name: "userName",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "What is your Email address?",
        type: "input",
        name: "email",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "What is the title of your project",
        type: "input",
        name: "title",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Please briefly describe your project",
        type: "input",
        name: "description",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Please describe how to install this repo",
        type: "input",
        name: "installation",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Please describe how to use your project",
        type: "input",
        name: "usage",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Would you like to include a license?",
        type: "confirm",
        name: "includeLicense",
        default: true,
    },
    {
        message: "Which license would you like to use?",
        type: "list",
        name: "license",
        when: ({includeLicense}) => {
            if (includeLicense) {
                return true
            }
            return false
        },
        choices: ["MIT License", "Apache License 2.0", "GNU GPLv3", "ISC License"]
    },
    {
        message: "Who contributed to this project?",
        type: "input",
        name: "credits",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Please describe how other can contribute to this project?",
        type: "input",
        name: "howToContribute",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Please describe how to set up and run tests",
        type: "input",
        name: "tests",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
    {
        message: "Whats is your github username?",
        type: "input",
        name: "questions",
        validate: (value) => {
            if (value) {
                return true
            } else {
                console.log("please answer the question!")
                return false
            }
        }
    },
]




const userPrompt = () => {
    return inquirer.prompt(questions)
}


const featuresPrompt = (promptData) => {


    if (!promptData.features) {
        promptData.features = []
    }

    const features = [
        {
            message: "Please add a feature to this project",
            type: "input",
            name: "features",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            message: "Do you have more features you wish to add?",
            type: "confirm",
            name: "moreFeatures",
            default: true,
        },
    ]

    return inquirer.prompt(features).then(response => {
        promptData.features.push(response.features)
        if (response.moreFeatures) {
            return featuresPrompt(promptData)
        } else {
            return promptData
        }
    })
}


module.exports = {
    userPrompt:userPrompt,
    featuresPrompt:featuresPrompt
}
