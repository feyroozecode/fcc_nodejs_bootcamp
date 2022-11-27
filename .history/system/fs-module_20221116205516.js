var path = require('path')
const { readFile, writeFile} = require('fs')

//const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
//const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

// get FilePath
var file1 = path.join(__dirname, '../content/subfolder/test.txt' )

function readAllFile(){
     
readFile(fileName, 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }   
    console.log(result); 
})
}