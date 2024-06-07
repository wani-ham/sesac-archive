const http = require('http');

const server = http.createServer((req, res) => {
    var _url = req.url;
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h2>Hello! Tay!</h2>");
    res.end(`<p> ${_url} </p>`);
});

server.listen(3000, () => {
    console.log("Server running...port 3000");
})