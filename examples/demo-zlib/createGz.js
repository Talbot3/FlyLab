const {createGzip} = require('zlib');
const {pipeline} = require("stream");

const {
    createReadStream,
    createWriteStream
} = require('fs');

const gzip = createGzip();
const source = createReadStream('index.js');
const destination = createWriteStream('index.js.gz');

pipeline(source,gzip, destination, (err)=> {
    if (err) {
        console.error("An error occurred:", err);
        process.exitCode = 1;
    }
})