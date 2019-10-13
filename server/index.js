const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Node Docker!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});