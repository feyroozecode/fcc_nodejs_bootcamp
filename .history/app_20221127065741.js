
const http = require('http')

const server = http.createServer((req, res)=> {
    
    if(req.url === '/')
    {
        res
    }
    res.end();
}) 

server.listen(5000)