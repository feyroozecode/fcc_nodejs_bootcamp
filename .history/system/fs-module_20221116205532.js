var path = require('path')
const { readFile, writeFile} = require('fs')


// get FilePath
var file1 = path.join(__dirname, '../content/subfolder/test.txt' )
//const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
//const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

function readAllFile(){
     
readFile(fileName, 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }   
    console.log(result); 
})
}