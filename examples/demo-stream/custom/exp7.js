const fs = require('fs');
const path = require('path');
const rr = fs.createReadStream(path.join(__dirname, './exp6.js'));
const zlib = require('zlib');
const z = zlib.createGzip();
const w = fs.createWriteStream(path.join(__dirname,'file.txt.gz'));

rr.on('readable', ()=>{
  console.log(`read data: ${rr.read()}`);
});

rr.on('end', ()=>{
  console.log('finish')
});

rr.pipe(z).pipe(w, {end: false});