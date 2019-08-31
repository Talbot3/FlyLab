const nsfw = require('nsfw');
const path = require('path');
// 检测文件变化
const watcher  = nsfw(path.join(__dirname, './static/'), (event)=> console.log(event)).then(watcher => watcher.start());
console.log(nsfw.actions);
// Here is console.log(event) result: 
// [
//   {
//     action: 2,
//     directory: '/Users/Arthur/FlyLab/src/demo-fileSystem/static/2019-08-26/camera_0',
//     file: '.DS_Store'
//   }
// ]
// [
//   {
//     action: 1,
//     directory: '/Users/Arthur/FlyLab/src/demo-fileSystem/static/2019-08-26/camera_0/wrong',
//     file: '18_06_19.mp4'
//   }
// ]