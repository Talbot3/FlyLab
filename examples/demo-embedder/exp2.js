const { AsyncLocalStorage } = require("async_hooks");

const localStorage = new AsyncLocalStorage();
let idSeq = 0;
localStorage.run(idSeq++, () => {
    // Imagine any chain of async operations here
    setImmediate(() => {
      console.log(idSeq);
    });
  });

localStorage.run(idSeq++, () => {
    // Imagine any chain of async operations here
    setImmediate(() => {
        console.log(idSeq);
    });
});