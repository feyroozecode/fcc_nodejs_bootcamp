const {readFileAsync, writeFileSync } = require('fs')

// get absolute file to the project with path nodejs module 
var absolutePath = path.join(__dirname, '../content/subfolder/' )


console.log("start");

const first = readFileAsync(absolutePath+'test.txt', 'utf-8')
const second = readFileAsync(absolutePath+'second.txt', 'utf-8')

writeFileSync(absolutePath)