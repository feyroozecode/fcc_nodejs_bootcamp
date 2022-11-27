var path = require('path')
const {readFileSync, writeFileSync, readFile } = require('fs')

// get absolute file to the project with path nodejs module 
var absolutePath = path.join(__dirname, '../content/subfolder/' )


console.log("start");

const first = readFileSync(absolutePath+'test.txt', 'utf-8')
const second = readFileSync(absolutePath+'second.txt', 'utf-8')

console.log("****** FS-Sync test ******* \n");

// asynchronius 
readFile(absolutePath+)

writeFileSync(
    absolutePath+'result-syn.txt', 
    'Here is the result : ' + first + " and " + second, 
    { flag: 'a' }
)
console.log('DONE WITH THIS TASK');
console.log("Starting the new one ");