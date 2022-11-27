// import of http module
const http = require('http')

const server = http.createServer((req, res)=> {
    
    if(req.url === '/'){
        res.end('Ahlan Wa Sahlan')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
}) 

server.listen(5000)