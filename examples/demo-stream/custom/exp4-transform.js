// 引入转换流
let {Transform, pipeline: _pipeline} =  require('stream');
const util = require('util');
const pipeline = util.promisify(_pipeline);

// 转换流的参数和可写流一样
let tranform1 = Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase()); 
        callback();
    }
});
let tranform2 = Transform({
    transform(chunk,encoding,callback){
        console.log(chunk.toString());
        callback();
    }
});
pipeline(
  process.stdin,
  tranform1, 
  tranform2
)

setTimeout(()=> {
  process.stdin.write('fdasfdsafdasEOFef\n')
  process.stdin.write(null);
}, 1000);

setTimeout(()=> {
  process.stdin.write('fdasfdsafdasEOFef\n')
  // process.stdin.write(null);
}, 2000);

// process.stdin.pipe(tranform1).pipe(tranform2);
