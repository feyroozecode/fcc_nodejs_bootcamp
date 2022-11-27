const { read, writeFileSync} = require('fs')

const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
const second = readFileSync('../content/subfolder/second.txt', 'utf-8')


writeFileSync(
    '../content/result-sync.txt', 
    'Here is the result '+ first + secon
 )