const { readFileSync, writeFileSync} = require('fs')

const first = await readFileSync('../content/subfolder/test.txt', 'utf-8')
const second = readFileSync('../content/subfolder/second.txt', 'utf-8')

console.log(first, second);