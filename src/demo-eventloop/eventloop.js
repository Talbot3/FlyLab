/**
 * Created by goerver on 16-9-29.
 */
(function spinForever() {
    process.stdout.write(".");
    process.nextTick(spinForever)
})();

(function fiboLoop() {
    process.stdout.write(fibo(45).toString());
    process.nextTick(fiboLoop);
})();

function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

