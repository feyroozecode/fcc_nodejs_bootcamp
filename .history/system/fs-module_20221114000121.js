const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('t', 'utf-8')
const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

console.log(first, second);