var path = require('path')
const { readFile, writeFile} = require('fs')

//const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
//const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

var fileName = path.

readFile('../content/subfolder/test.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }   
    console.log(result); 
})

