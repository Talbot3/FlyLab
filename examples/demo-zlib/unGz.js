const { deflate, unzip} = require('zlib');
const { 
    createReadStream, 
    createWriteStream
} = require('fs');
const {
    pipeline
} = require('stream');

const gzFile = createReadStream('./index.js.gz');
const file = createWriteStream('./index.js');
pipeline(gzFile, unzip, file);