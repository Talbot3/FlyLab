const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const bluebird = require('bluebird');
const _ffmpeg = require('fluent-ffmpeg');
_ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const Ffmpeg = bluebird.promisifyAll(_ffmpeg);
// const command = new Ffmpeg();

(async ()=>{
    let encoders =  await Ffmpeg.getAvailableEncodersAsync();
    console.log(encoders);
    // let result = await Ffmpeg.getAvailableEncoders();
    // console.log(result);
})()
