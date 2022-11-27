var path = require('path')
const { readFileSync, writeFile} = require('fs')


// get FilePath
var filePath = path.join(__dirname, '../content/subfolder/' )

const allFiles = [
    readFileSync(filePath+'test.txt', 'utf-8'),    
    readFileSync(filePath+'second.txt', 'utf-8')
];

readAllFile()

function readAllFile(){
    for(file in allFiles){
        console.log("File with position "+ file + ", content is  *** : "+ allFiles[file]);
    }
}
