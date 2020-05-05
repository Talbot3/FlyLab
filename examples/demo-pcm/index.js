const Speaker = require('speaker');
const fs = require('fs');
// Create the Speaker instance
const speaker = new Speaker({
  channels: 1,          // 2 channels
  bitDepth: 16,         // 16-bit samples
  sampleRate: 8000     // 44,100 Hz sample rate
});
let readStream = fs.createReadStream('./receive.pcm');

readStream.pipe(speaker);