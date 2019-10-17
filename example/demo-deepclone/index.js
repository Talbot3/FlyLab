const clone = require('rfdc')();

const t = clone({a: 1, b: {c: 2}, s: console.log})
console.log(t);