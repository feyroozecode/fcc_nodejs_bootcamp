//require('./elementary/calculator-module')
//require('./system/os')
//require('./system/path-module')
//require('./system/fs-module')
//require('./system/fs-async')

const http = require('http')

const server = http.crea teServer((req, res)=> {
    res.write('Server is working, Alhamdoulillah')
    res.end();
})

server.listen(5000)