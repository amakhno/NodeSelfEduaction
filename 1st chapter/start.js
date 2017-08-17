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
var path = require("path");

var mimeType = {
    ".js": "text/javascript",
    ".html": "text/html",
    ".gif": "image/gif",
    ".css": "text/css",
    ".jpg": "text/jpeg",
    ".ico": "image/x-icon",
};

/*var httpServer = require("http").createServer(function onRequest (req, res) {
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
            res.writeHead(200, {"ContentType": mimeType[path.extname(pathName)],} );
            res.write(data);
            res.end();
        }
    });
});*/

var httpServer = require("http").createServer(function (req, res) {
    var pathName = url.parse(req.url).path;
    if (pathName == "/") {
        pathName = "/index.html";
    }
    
    var extname = path.extname(pathName);
    var mimeTypeNow = mimeType[extname];
    if ( (extname == ".gif") || (extname == ".jpg") || (extname == ".ico")) {

        var imageExits = fs.existsSync("./" + pathName);
        if (imageExits) {
            //var img = fs.readFileSync("./" + pathName);
            fs.readFile("./" + pathName, function (err, data) {
                if (err) {
                    res.end();
                } else {
                    res.end(data, "binary");
                }

            })
            console.log(pathName + " " + mimeTypeNow);
            res.writeHead(200, {"ContentType": mimeTypeNow,});
            //res.end(img, "binary");
        } else {
            console.log("Image no found! (" + pathName + ")");
            res.end();
        }
        
    } else {
        fs.readFile("./" + pathName, {encoding: "utf8", }, function (err, data) {
            if (err) {
                console.log("Could not find or open file " + pathName + " for reading\n");
                res.end();
            } else {
                console.log(pathName + " " + mimeTypeNow);
                res.writeHead(200, {"ContentType": mimeTypeNow,});
                res.end(data);
            }
        });
    }

});

httpServer.listen(8000);