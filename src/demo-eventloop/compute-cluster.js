/**
 * Created by goerver on 16-9-29.
 */
var computecluster = require('compute-cluster');

var cc = new computecluster({module:"./worker.js"});

// 并行运行工作
cc.enqueue({input:35},function (err,result) {
    console.log("35:",result);
});

cc.enqueue({input:40},function (err,result) {
    console.log("40:",result)
})