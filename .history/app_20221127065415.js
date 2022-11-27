
const http = require('http')

const server = http.createServer((req, res)=> {
    console.log(req);
    res.write('Server is working, Alhamdoulillah')
    res.end();
}) 

server.listen(5000)