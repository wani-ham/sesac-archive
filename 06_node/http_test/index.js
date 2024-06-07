// const http = require('http');

// const server = http.createServer();

// server.listen(8080, function() {
//     console.log('port 8080');
// });


const http = require('http');
const server = http.createServer();

server.listen(8080, function() {
    console.log('Server running...in port 8080');
});

