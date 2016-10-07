/**
 * Created by goerver on 16-9-29.
 */

function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

var cluster = require("cluster");

if (cluster.isMaster) {
    cluster.fork();
} else {
    (function fiboLoop() {
        process.stdout.write(fibo(60).toString())
        process.nextTick(fiboLoop);
    })()
}
