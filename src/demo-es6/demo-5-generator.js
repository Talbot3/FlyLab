/**
 * Created by Administrator on 2016/12/16 0016.
 * Generator函数是一个状态机，封装了多个内部状态。
 * 执行Generator函数会返回一个遍历器对象，也就是说，
 * Generator函数除了状态机，还是一个遍历器对象生成函数。
 * 返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
 */

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
console.log(b.next());// { value:6, done:false }
console.log(b.next(12))// { value:8, done:false }
console.log(b.next(13))// { value:42, done:true }