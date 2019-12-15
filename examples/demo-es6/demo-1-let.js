/**
 * Created by goerver on 16-10-6.
 * ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，
 * 只在let命令所在的代码块内有效。
 **/
"use strict";

{
    let a = 10;
    var b = 1;
}

try {
    console.log(a);
    console.log(b);
} catch (exception) {
    console.log(b);
}

/***
 * var i=0改为let i=0时，会比较有用
 * 变量i是var声明的，在全局范围内都有效。所以每一次循环，
 * 新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。
 */
for (var i = 0; i < 10; ++i) {
    console.log(i);
}
console.log(i);


/***
 * 实际发生的，并不会发生变量提升的情况
 */
console.log(foo);
console.log(bar);

var foo = 2;
var bar = 3;

/***
 * 暂时性死区,例如:
 * y=2,x=y位置互换时,会报错
 * @param y
 * @param x
 * @returns {*[]}
 */
function bar2(y=2,x=y) {
    return [x,y];
}

console.log(bar2());

//ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句。
if (true) {
    let test = function() {console.log("hi");}
    test();
}
