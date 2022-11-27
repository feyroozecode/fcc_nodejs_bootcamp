const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('../content/subfolder/', 'utf-8')
const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

console.table(first, second);