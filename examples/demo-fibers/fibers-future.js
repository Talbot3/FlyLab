var Future = require('fibers/future');
var fs = Future.wrap(require('fs'));
const a = {a:12, c: 13};
const b = [1,2,3,3,4]
Future.task(async function(params) {
	// Get a list of files in the directory
	// var fileNames = fs.readdirFuture('.').wait();
	// console.log('Found '+ fileNames.length+ ' files');
  // console.log(a,b);
	// // Stat each file
	// var stats = [];
	// for (var ii = 0; ii < fileNames.length; ++ii) {
	// 	stats.push(fs.statFuture(fileNames[ii]));
	// }
	// stats.map(function(f) {
	// 	f.wait()
	// });

	// // Print file size
	// for (var ii = 0; ii < fileNames.length; ++ii) {
	// 	console.log(fileNames[ii]+ ': '+ stats[ii].get().size);
  // }
  let t =  await Promise.resolve(33);
  console.log('test',t )
}).detach();

console.log('hi')