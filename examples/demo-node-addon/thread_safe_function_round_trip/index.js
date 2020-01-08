let bindings = require('./build/Release/round_trip.node');

function wait() {
  setTimeout(() => {
    console.log('free?');
    wait();
  }, 3999);
}
console.log('==============================================0');
bindings.startThread(item => {
  const thePrime = item.prime;
  console.log('The prime: ' + thePrime);

  // Answer the call with a 90% probability of returning true somewhere between
  // 200 and 400 ms from now.
  // setTimeout(() => {
    const theAnswer = (Math.random() > 0.1);
    console.log(thePrime + ': answering with ' + theAnswer);
    bindings.registerReturnValue(item, theAnswer);
    if (!theAnswer) {
      // bindings = null;
    }
  // }, Math.random() * 200 + 200);
});
console.log('==============================================1');

wait();


// console.log('==============================================2');
// bindings.startThread(item => {
//   const thePrime = item.prime;
//   console.log('The prime: ' + thePrime);

//   // Answer the call with a 90% probability of returning true somewhere between
//   // 200 and 400 ms from now.
//   // setTimeout(() => {
//     const theAnswer = (Math.random() > 0.1);
//     console.log('2' + thePrime + ': answering with ' + theAnswer);
//     bindings.registerReturnValue(item, theAnswer);
//     if (!theAnswer) {
//       // bindings = null;
//     }
//   // }, Math.random() * 200 + 200);
// });
// console.log('==============================================3');
