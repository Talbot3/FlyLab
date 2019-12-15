/**
 * Created by goerver on 16-10-1.
 */
var fs =require("fs");
var profiler = require("v8-profiler");
var snapshot1= profiler.takeSnapshot();
var snapshot2= profiler.takeSnapshot();

console.log(snapshot1);