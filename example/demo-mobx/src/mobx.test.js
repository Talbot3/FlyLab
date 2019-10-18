import {
  observable, 
  isArrayLike, 
  computed, 
  autorun,
  when,
  reaction,
  action,
  runInAction
} from 'mobx';

const arr = observable(['a', 'b', 'c', 'd']);

console.log(arr, Array.isArray(arr), isArrayLike(arr));

console.log(arr.pop());
console.log(arr.push(33));
console.log(arr[33]);

const obj = observable({a: 1, b: 2});
console.log(obj.a, obj.b);
console.log(obj);
delete obj.a;
console.log(obj.a, obj.b);


const map = observable(new Map());
console.log(obj);
map.set('a', 1);
console.log(map.has('a'));
map.delete('a');
console.log(map.has('a'));

let num = observable.box(20);
let str = observable.box("hahaha");
let bool = observable.box(true);
num.set(50);
str.set('hahahaha');
bool.set('bool');

console.log(num, str, bool);

class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();

  @observable string = 'hello';
  @observable number = 20;
  @observable bool = false;

  @computed get mixed() {
    return store.string + '/' + store.number;
  }

  @action.bound bar() {
    store.string = 'world';
  }
}

// computed
var store = new Store();
var foo = computed(function() {
  return store.string + '/' + store.number;
});

foo.observe(function(change) {
  console.log(change);
})

store.string = 'world';
store.number = 30;


// autorun(() => {
//   console.log(store.mixed);
// })

store.string = 'world';
store.number = 30;

console.log('before');
when(()=>!!store.bool, ()=> console.log("it's true"));
console.log('after');
store.bool = true;

reaction(()=> [store.string, store.number], arr => console.log(arr.join('/')));

store.string = 'world';
store.number = 40;

store.bar();


runInAction(()=> {
  store.string = 'world';
  store.number = 66;
})






// function log(target) {
//   const desc = Object.getOwnPropertyDescriptors(target.prototype);
//   for (const key of Object.keys(desc)) {
//     if (key === 'constructor') {
//       continue;
//     }

//     const func = desc[key].value;
//     if ('function' === typeof func) {
//       Object.defineProperty(target.prototype, key, {
//         value(...args) {
//           console.log('before'+key);
//           const ret = func.apply(this, args);
//           console.log('after' + key);
//           return ret;
//         }
//       })
//     }
//   }
// }

// function readonly(target, key, descriptor) {
//   descriptor.writable = false;
//   // descriptor.configurable = false;
//   // descriptor.enumerable = false;
//   // console.log("AABBCC");
//   // console.log(target, key, descriptor);
//   // return descriptor;
// }

// function validate(target, key, descriptor) {
//   console.log(target, key, descriptor);

//   const func = descriptor.value;
//   console.log(target, key, descriptor);
//   descriptor.value = function(...args) {
//     for (let num of args) {
//       if ('number' !== typeof num) {
//         throw new Error(`${num} is not a number`);
//       }
//     }

//     return func.apply(this, args);
//   }
// }

// @log
// class Numberic {
//   @readonly 
//   PI = 3.1415926;

//   @validate
//   add(...nums) {
//     return nums.reduce((p, n) => (p +n) , 0);
//   }
// }
// let t = new Numberic()
// t.PI = 100;
// document.write(t.add(22, 33));


