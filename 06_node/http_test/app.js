const http = require('http');
const server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-type': 'text/plain'})
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write("<h1> Hello World! </h1>");
    res.end("<p> End! </p>")
})

server.listen(8080, () => {
    console.log('Server running in 8080 port');
});

