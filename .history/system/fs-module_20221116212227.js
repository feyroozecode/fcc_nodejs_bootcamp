var path = require('path')
const { readFileSync, writeFileSync, readFile} = require('fs')


// get absolute file to the project with path nodejs module 
var absolutePath = path.join(__dirname, '../content/subfolder/' )

readFile(absolutePath+"")

// array of all text file with getting existency  
c

console.log(" \n **** Read all files ********* \n");
readAllFiles()
writeAFile()

// my func to getALLFile
function readAllFiles(){
    for(file in allFiles){
        console.log("File with position "+ file + ", content is  : ***  "+ allFiles[file] + " ***");
    }
}

// my func to write in a file 
/// concatenate two text file to one file with paste the 
//result to the end result page named result-sync.txt
function writeAFile(){
    writeFileSync(
        absolutePath + 
        "result-sync.txt", "Here is the result : "+ allFiles[0] +" "+ allFiles[1], 
        (err, result) => {
            if(err){
                console.log(err);
                return;
            } 
            else {
                console.log("Writing successfully in result-sync.txt from two txt file\n and the final result = "+ result);
                return;
            }            
        }
        //{flag: 'a'}
    );
   
}
