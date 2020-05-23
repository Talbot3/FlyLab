
var nano = require('nanomsg');
var i = 100000000;
  var push = nano.socket('pub', {dontwait: true, sndtimeo: 200});
  push.tcpnodelay(true); 
  var addr = 'tcp://127.0.0.1:7899';
  push.connect(addr);

  while (true){
    var msg = {
      bucket: "wrongvideo",
      path: "2019-11-16/camera_2/2_wrong_time20191116090759.mp4"
    };
    push.send(JSON.stringify(msg));
    i-=1;
    push.flush();
  }
