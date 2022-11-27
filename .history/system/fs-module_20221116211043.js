var path = require('path')
const { readFileSync, writeFileSync} = require('fs')


// get FilePath
var absolutePath = path.join(__dirname, '../content/subfolder/' )

const allFiles = [
    readFileSync(absolutePath+'test.txt', 'utf-8', (err, result) =>{
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

function writeAFile(){
    writeFileSync(filePath + "result-sync.txt")
}
