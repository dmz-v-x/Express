const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(404, { "content-type": "text/html" });
  res.write(`<h1>This is the home page</h1>`);
  res.end();
});

server.listen(3000);
