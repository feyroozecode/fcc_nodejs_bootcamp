
const http = require('http')

const server = http.createServer((req, res)=> {
    
    if(req.url === '/'){
        res.end('Ahlan Wa Sahlan')
    }
    if(req.url === '/about'){}
}) 

server.listen(5000)