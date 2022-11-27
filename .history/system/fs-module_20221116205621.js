var path = require('path')
const { readFile, writeFile} = require('fs')


// get FilePath
var filePath = path.join(__dirname, '../content/subfolder/' )

const first = readFileSync(filePath+'/test.txt', 'utf-8')
const second = readFileSync(filePath+'second.txt', 'utf-8')

function readAllFile(){
  
}