const Speaker = require('speaker');
const fs = require('fs');
// Create the Speaker instance
const speaker = new Speaker({
  channels: 2,          // 2 channels
  bitDepth: 16,         // 16-bit samples
  sampleRate: 44100     // 44,100 Hz sample rate
});
let readStream = fs.createReadStream('./MakingAllThingsNew.pcm');
// PCM data from stdin gets piped into the speaker
readStream.pipe(speaker);