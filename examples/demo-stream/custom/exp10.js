const fs = require('fs');
testWav = fs.createWriteStream('./test.wav', {encoding: 'binary'});
let buffer = Buffer.from("wahahahha");
console.log();
testWav.write(buffer);