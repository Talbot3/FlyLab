let list = [ '2019-08-30/camera_0/wrong/test.mp4',
'2019-08-23/camera_0/wrong/test2.mp4',
'2019-08-23/camera_0/wrong/test.mp4',
'2019-08-23/camera_0/wrong/17_38_20.webm',
'2019-08-23/camera_0/wrong/17_26_13.webm',
'2019-08-26/camera_0/wrong/17_38_20.webm',
'2019-08-30/camera_0/wrong/17_38_20.webm',
'2019-08-30/camera_0/wrong/test2.mp4',
'2019-08-30/camera_0/wrong/17_26_13.webm',
'2019-08-26/camera_0/wrong/test2.mp4',
'2019-08-26/camera_0/wrong/test.mp4',
'2019-08-26/camera_0/wrong/17_26_13.webm' ];
const path = require('path');
const stable = require('stable')
const s = stable(list, function(v1,v2) {
  let vv1 = v1.split(path.sep)[0];
  let vv2 = v2.split(path.sep)[0];
  let seq = new Date(vv1).getTime() <= new Date(vv2).getTime();
  return seq;
});
console.log(s);