var server = require("http");
var route = require("./routes.js");

server.createServer(function (request, response) {
  route.pages(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
