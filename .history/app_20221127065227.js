

const server = http.createServer((req, res)=> {
    res.write('Server is working, Alhamdoulillah')
    res.end();
})

server.listen(5000)