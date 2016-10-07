/**
 * Created by goerver on 16-10-6.
 */
let s = Symbol();

console.log(typeof s);

var s1 = Symbol("foo");
var s2 = Symbol("bar");

console.log(s1.toString());
console.log(s2.toString());

class A1 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}
class A2 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = false;
    }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
console.log([1, 2].concat(a1).concat(a2));
// [1, 2, 3, 4, [5, 6]]