
const http = require('http')

const server = http.createServer((req, res)=> {
    
    if(req.url === '/')
    {
        res.end('Ahlan Wa Sahlan')
    }
    
}) 

server.listen(5000)