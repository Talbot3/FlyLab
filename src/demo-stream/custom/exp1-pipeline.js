const {pipeline} = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('./output.tar.gz'),
  zlib.createGunzip(),
  fs.createWriteStream('./output.mp4'),
  (err) => {
    if (err) {
      console.error('pipe failed', err);
    } else {
      console.log('管道连接Fine');
    }
  }
)