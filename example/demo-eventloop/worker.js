/**
 * Created by goerver on 16-9-29.
 */
process.on('message', function (m) {
    var output = fibo(m.input);
    process.send(output);
});

function fibo (n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
