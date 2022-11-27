var path = require('path')
const { readFile, writeFile} = require('fs')


// get FilePath
var filePath = path.join(__dirname, '../content/subfolder/' )

const allFiles = [
    readFileSync(filePath+'/test.txt', 'utf-8'),    
    readFileSync(filePath+'second.txt', 'utf-8')
];


function readAllFile(){
    for(file in allFiles){
        console.log("File "+ file + " content is "+ allFiles[file]);
    }
}