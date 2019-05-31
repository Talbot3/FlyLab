var fs = require('fs');
var ss = require('smart-stream-timeout');

// open some file streams
var readStream = fs.createReadStream('./index.js', { encoding: 'utf8' });
var writeStream = fs.createWriteStream('./output.txt');

// create your own stream middleware
var lowerCaseStream = new ss.SmartStream('LowerCaseStream'); // bi-directional stream
lowerCaseStream.setMiddleware(function(data, cb) {
	var result = data.toLowerCase();
	cb(null, result);
	// NOTE: set result to undefined to prevent it from moving downstream
});

// lay some pipe, Tex!
readStream
	.pipe(lowerCaseStream)
	.pipe(writeStream);