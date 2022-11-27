var path = require('path')
const {readFileSync, writeFileSync, readFile, writeFile } = require('fs')

// get absolute file to the project with path nodejs module 
var absolutePath = path.join(__dirname, '../content/subfolder/' )


console.log("start");

const first = readFileSync(absolutePath+'test.txt', 'utf-8')
const second = readFileSync(absolutePath+'second.txt', 'utf-8')

console.log("****** FS-Sync test ******* \n");

// asynchronius function 
readFile(absolutePath+'test.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
    }
    const first = result

    readFile(absolutePath+'second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result

        writeFile(
            absolutePath+'result-async.txt',
            'Here is the result : '+ first + "\n" + second, 
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
                console.log('DONE WITH THIS TASK');
            }
        )

    })
})
console.log("Starting the new one ");