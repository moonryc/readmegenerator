

const {userPrompt, featuresPrompt} = require('./src/userPrompt')
const generateReadme = require('./src/generateReadme')

userPrompt().then(featuresPrompt).then(data=>{generateReadme(data)})