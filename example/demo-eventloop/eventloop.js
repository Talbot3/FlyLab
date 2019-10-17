/**
 * Created by goerver on 16-9-29.
 */
// (function spinForever() {
//     process.stdout.write(".");
// })();
//
// (function fiboLoop() {
//     process.stdout.write(fibo(45).toString());
//     process.nextTick(fiboLoop);
// })();
//
// function fibo(n) {
//     return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
// }

setImmediate(function A() {
	console.log(1);
	setImmediate(function B(){console.log(2);});
});

setTimeout(function timeout() {
	console.log('TIMEOUT FIRED');
}, 0);