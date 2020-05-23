const WorkerCluster = require('./WorkerCluster');

let worker = new WorkerCluster(1,2);
worker.init((a,b)=>a+b);
worker.on('data', (result)=>console.log(result));
worker.start();

console.log("done")