const cluster = require('cluster');
cluster.on('online', (worker) => {
    console.log('Yay, the worker responded after it was forked');
  });
if (cluster.isMaster) {
    const worker = cluster.fork();
    worker.send('hi there');
    worker.on('message', (msg)=>{
        console.log('hi master, worker say: ', msg)
    })
  
  } else if (cluster.isWorker) {
    process.on('message', (msg) => {
      console.log('receive message ',msg);
      process.send(msg);
    });
  }