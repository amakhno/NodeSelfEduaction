/*var http = require("http");
var server = http.createServer(function (request, response) {    
    response.writeHead(200, {"ContentType": "text/html", } );
    response.write("<h2>Hello</h2> ");
    response.write("<h1>Hello</h1>");
    response.end();
});
server.listen(8000);*/

var fs = require("fs");
var fileName = "index.html";

require("http").createServer(function (req, res) {
    fs.readFile(fileName, null, function (err, data) {
        if (err) {
            console.log("Could not find or open file for reading\n");
        } else {
            res.writeHead(200, {"ContentType": "text/html",} );
            res.write(data);
            res.end();
        }
    });
}).listen(8000);