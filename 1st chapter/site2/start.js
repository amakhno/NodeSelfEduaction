/*var http = require("http");
var server = http.createServer(function (request, response) {    
    response.writeHead(200, {"ContentType": "text/html", } );
    response.write("<h2>Hello</h2> ");
    response.write("<h1>Hello</h1>");
    response.end();
});
server.listen(8000);*/

var fs = require("fs");
var url = require("url");

var httpServer = require("http").createServer(function onRequest (req, res) {
    var pathName = url.parse(req.url).path;
    if (pathName == "/") {
        pathName = "/index.html";
    }
    pathName = pathName.substring(1, pathName.length);
    console.log("Получен запрос: " + pathName);
    
    fs.readFile(pathName, "utf8", function (err, data) {
        if (err) {
            console.log("Could not find or open file " + pathName + " for reading\n");
            res.end();
        } else {
            res.writeHead(200, {"ContentType": "text/html",} );
            res.write(data);
            res.end();
        }
    });
});

httpServer.listen(8000);