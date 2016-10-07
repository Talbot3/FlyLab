/**
 * Created by goerver on 16-10-6.
 * const 的作用域与let命令相同：只在声明所在的块级作用域内有效。
 * const 声明一个只读的常量。一旦声明，常量的值就不能改变。
 * const 同样存在暂时性死区，只能在声明的位置后面使
 */
const PI = 3.1415;
console.log(PI);


// PI=3

if (true) {
    const MAX = 5;
}

// console.log(MAX);

/***
 * 常量foo储存的是一个地址，这个地址指向一个对象。
 * 不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。
 * @type {{}}
 */
const foo = {};
foo.prop = 123;

console.log(foo.prop);

const a = [];

a.push("hello");
a.length = 0;

/***
 * 常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。
 * @type {Object}
 */
const foo2 = Object.freeze({});
foo2.prop = 123;
console.log(foo2.prop);

var constantize = (function (obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(function (key, value) {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    })
});

/***
 * 全局对象的属性
 * 全局对象是最顶层的对象，在浏览器中指window ,Node.js 指global
 * var命令和function命令声明的全局变量，依旧是全局对象的属性；
 * 另一方面规定，let命令、const命令、class命令声明的全局变量，
 * 不属于全局对象的属性。也就是说，从ES6开始，全局变量将逐步与全局对象的属性脱钩。
 **/