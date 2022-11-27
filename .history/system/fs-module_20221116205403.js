var path = require('path')
const { readFile, writeFile} = require('fs')

//const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
//const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

// get FilePath
var fileName = path.join(__dirname, '../content/subfolder/test.txt' )

readAllFile({})