const {readFileSync, writeFileSync} = require('fs')

fs.readFileSync()

const first = readFileSync('../content/subfolder/test.txt', 'utf-8')
const second = readFileSync('../content/subfolder', 'utf-8')

console.table(first, second);