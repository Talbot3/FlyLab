const log = require('util').debuglog('log');

class Test {
    wahaha() {
        log('wahaha');
    }
}
let test = new Test();
 obj = new Proxy(test, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);    // es 6 新増的字符串拓展写法
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${JSON.stringify(target)} ${key} ${value}  !`);
    return Reflect.set(target, key, value, receiver);
  },
  apply(target, that, args) {
    // sup.apply(that, args);
    // base.apply(that, args);
    log("apply ",target, that, args);
  }
});
obj.count = 1;
++ obj.count;
obj.wahaha()
obj.call