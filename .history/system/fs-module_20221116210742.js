var path = require('path')
const { readFileSync, writeFile} = require('fs')


// get FilePath
var filePath = path.join(__dirname, '../content/subfolder/' )

const allFiles = [
    readFileSync(filePath+'test.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        } else {
            return result;
        }
    }),    
    readFileSync(filePath+'second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        } else {
            return result;
        }
    })
];

console.log(" \n **** Read all files ********* \n");
readAllFile()

function readAllFile(){
    for(file in allFiles){
        console.log("File with position "+ file + ", content is  : ***  "+ allFiles[file] + " ***");
    }
}
