const writeQueue = require('write-queue');
 
const queue = writeQueue({
    batchSize: 100,
    wrietDelay:1000
});
 
queue.on('flush', function (items) {
  // all the items
  console.log(items);
});
 
while(true) {
    queue({
        path: Math.floor(Math.random()* 100000)
    });
}