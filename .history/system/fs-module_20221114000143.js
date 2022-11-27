const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
const second = readFileSync('../content/sub', 'utf-8')

console.log(first, second);