const fs =require('fs');
const unzip = require('unzip-stream');


fs.createReadStream('./task.zip')
.pipe(unzip.Parse())
.on('entry', function (entry) {
  var filePath = entry.path;
  var type = entry.type; // 'Directory' or 'File'
  var size = entry.size; // might be undefined in some archives
  // if (filePath === "this IS the file I'm looking for") {
  entry.pipe(fs.createWriteStream('./a'));
  // } else {
  //   entry.autodrain();
  // }
});