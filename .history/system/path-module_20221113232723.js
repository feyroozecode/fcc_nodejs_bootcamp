const path = require('path')

console.log("File separator"+path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log("File path is "+ filePath);

const baseName = path.basename(filePath)
console.log("The last from the folder is "+ baseName);

const absolute = path.resolve(__dirname, 'content')