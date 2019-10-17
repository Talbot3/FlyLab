/**
 * Created by goerver on 16-10-1.
 */
var profiler = require("v8-profiler");

var snapshot1 = profiler.takeSnapshot('1');
var snapshot2 = profiler.takeSnapshot();

console.log(snapshot1.getHeader(),snapshot2.getHeader());
console.log(snapshot1.compare(snapshot2));
profiler.startProfiling("",true);
profiler.deleteAllSnapshots();

setTimeout(function () {
    var profile = profiler.stopProfiling('');
    profiler.deleteAllProfiles();
},100);


