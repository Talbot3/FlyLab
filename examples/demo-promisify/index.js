const util = require('util');

class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const bindBar = util.promisify(foo.bar).bind(foo);
(async ()=>{
  let t = await bindBar();
  console.log(t);
})()
// TypeError: Cannot read property 'a' of undefined
// naiveBar().then(a => console.log(a));

// naiveBar.call(foo).then((a) => console.log(a)); // '42'

// const bindBar = naiveBar.bind(foo);
// bindBar().then((a) => console.log(a)); // '42'