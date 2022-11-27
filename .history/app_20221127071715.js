// import of http module
const http = require('http')

// create a server
const server = http.createServer((req, res)=> {
    
    if(req.url === '/'){ // if request point to '/'
       //res.end('Ahlan Wa Sahlan')
        res.end(
            '<b>Accueil</b> <br/>  <a href="/contact">Contact page</a>    <a href="/about">A propos</a>'
             
        )
    }
    if(req.url === '/contact'){
        res.end('<b>Contactez nous</b> <br> <a href="/">Accueil</a>')
    }
    if(req.url === '/about'){ // if request point to /about
        res.end('<b>About page</b>,  <br> <a href="/">Accueil</a>')
    }

    res.end('<b>Error </b>,  <br> <a href="/">GAccueil</a>')


}) 

server.listen(5000)