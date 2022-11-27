var path = require('path')
const { readFileSync, writeFileSync, readFile, read} = require('fs')

const DEFAULT_ENCOD = 'utf-8'


// get absolute file to the project with path nodejs module 
var absolutePath = path.join(__dirname, '../content/subfolder/' )


const allFiles = [
    readFileSync(absolutePath+'test.txt', DEFAULT_ENCOD, (err, result) =>{
        if(err){
            console.log(err);
            return;
        } else {
            return result;
        }
    }),    
    readFileSync(absolutePath+'second.txt', DEFAULT_ENCOD, (err, result) =>{
        if(err){
            console.log(err);
            return;
        } else {
            return result;
        }
    })
];
// a unique non blocking asynchronius fun 
readFile(absolutePath+'test.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return 
    } 
    const first  = result
        
    readFile(absolutePath+'second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
    const second = result

    writeAFile(first, second)
})
})

// array of all text file with getting existency  

console.log(" \n **** Read all files ********* \n");
//readAllFiles()
//writeAFile()

// my func to getALLFile
function readAllFiles(){
    for(file in allFiles){
        console.log("File with position "+ file + ", content is  : ***  "+ allFiles[file] + " ***");
    }
}

// my func to write in a file 
/// concatenate two text file to one file with paste the 
//result to the end result page named result-sync.txt
function writeAFile(file1, file2){
    console.log('*** \n Write and concatenate files **** \n');
    writeFileSync(
        absolutePath + 
        "result-sync.txt", "Here is the result : "+ file1 +" "+ file2, 
        (err, result) => {
            if(err){
                console.log(err);
                return;
            } 
            
                console.log("Writing successfully in result-sync.txt from two txt file\n and the final result = "+ result);
                     
        }
        //{flag: 'a'}
    );
   
}
