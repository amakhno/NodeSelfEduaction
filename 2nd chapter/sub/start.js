var cp = require("child_process");

var child = cp.fork(__dirname + "/sub.js");

child.on("message", function (data) {
    console.log("Main got message: ", data);
});

child.send({hello: "child",});