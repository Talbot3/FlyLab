// const Parallel = require('paralleljs');
// const p = new Parallel([1,2,3,4]);
// console.log(p.data);

const { StaticPool } = require("node-worker-threads-pool");

const staticPool = new StaticPool({
    size: 4,
    task: (n) => n + 1,
});
let t = 0
while(t<100) {
    staticPool.exec(t++).then((result) => {
        console.log("result from thread pool:", result); // result will be 2.
    });
}

