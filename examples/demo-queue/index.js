// const { AwaitQueue, AwaitQueueTask, AwaitQueueDumpItem } = require('awaitqueue');
// function taskFactory(id) {
//     console.log('creating task %d', id);

//     // Return a function that returns a Promise (a task).
//     return function () {
//         return new Promise((resolve) => {
//             console.log('running task %d', id);
//             setTimeout(() => resolve(id), 2000);
//         });
//     };
// }

// async function run() {
//     const queue = new AwaitQueue();
//     let result;

//     console.log('1. calling queue.push()');
//     result = await queue.push(taskFactory('1'));
//     console.log('1. task result:', result);

//     console.log('2. calling queue.push()');
//     result = await queue.push(taskFactory('2'));
//     console.log('2. task result:', result);

//     console.log('3. calling queue.push()');
//     await new Promise((resolve) => {
//         queue.push(taskFactory('3'))
//             .then(() => {
//                 console.warn('3. task should not succeed (it was stopped)');
//                 resolve();
//             })
//             .catch((error) => {
//                 console.log('3. task failed as expected because it was stopped (%s)', error.toString());
//                 resolve();
//             });

//         console.log('3. calling queue.stop()');
//         queue.stop();
//     });

//     console.log('calling queue.close()');
//     queue.close();

//     try {
//         console.log('4. calling queue.push()');
//         await queue.push(taskFactory('4'));
//     }
//     catch (error) {
//         console.error('4. task failed as expected because it was closed (%s)', error.toString());
//     }
// }

// run();

// let queue = require('fastq')(worker, 4);

// queue.push(42, function (err, result) {
//     if (err) { throw err }
//     console.log('the result is', result)
// })

// function worker(arg, cb) {
//     cb(null, 42 * 2)
// }

var that = { hello: 'world' }
var queue = require('fastq')(that, worker, 1)

while(true) {
    queue.push(42, function (err, result) {
        if (err) { throw err }
        console.log(this)
        console.log('the result is', result)
    })
}


function worker(arg, cb) {
    console.log(this)
    cb(null, 42 * 2)
}

// const {default: PQueue} = require('p-queue');
// const queue = new PQueue();

// queue.add(async () => console.log('🦄'), { priority: 1 });
// queue.add(async () => console.log('🦄'), { priority: 0 });
// queue.add(async () => console.log('🦄'), { priority: 1 });

// console.log(queue.sizeBy({ priority: 1 }));
// //=> 2

// console.log(queue.sizeBy({ priority: 0 }));