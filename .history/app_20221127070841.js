// import of http module
const http = require('http')

// create a server
const server = http.createServer((req, res)=> {
    
    if(req.url === '/'){ // if request point to '/'
       //res.end('Ahlan Wa Sahlan')
        res.end(
            '<b>Accueil</b> <br/>  <a href="/contact">Contact page</a>   <a href="/about">A propos</a>'
             
        )
    }
    if(req.url === '/contact'){
        res.end('<b>Contactez nous< <br> <a href="/">Accueil</a>')
    }
    if(req.url === '/about'){ // if request point to /about
        res.end('About page,  <br> <a href="/">Accueil</a>')
    }
}) 

server.listen(5000)