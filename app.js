const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n This is new line');//res.end is like echo in php
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});