const addon = require('./build/Release/async_promise');
let i = 0;
while(i++< 1000){
  var promise = addon.examplePromise(42);
  promise.then(console.log, console.error);
  console.log("Waiting for the promise resolution...");
  
  var promise2 = addon.examplePromise('bad argument');
  promise2.then(console.log, console.error);
  console.log("Waiting for a rejected promise...");
}
