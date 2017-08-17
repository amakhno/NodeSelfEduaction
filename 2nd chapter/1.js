
process.stdin.setEncoding("utf8");
process.stdin.resume();
console.log("PID: %d", process.pid);

process.on("SIGHUP", function () {
    console.log("Got a SIGHUP");
    process.kill(process.pid);
});