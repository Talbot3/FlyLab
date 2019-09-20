const ffprobe = require('ffprobe-client');
const util = require('util');
const {join} = require('path');
ffprobe(join(__dirname, './17_38_20.mp4'))
  .then((data)=>console.log(JSON.stringify(data)))
  .catch(err=>console.log(util.inspect(err)));