const { readFile, writeFile} = require('fs')

const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

readFile('../content/subfolder/test.txt', 'utf-8', (err, result) => {

/*
writeFileSync(
    '../content/result-sync.txt', 
    'Here is the result '+ first + secon
 )
 */