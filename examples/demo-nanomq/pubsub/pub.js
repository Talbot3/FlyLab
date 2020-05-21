
var nano = require('nanomsg');
var i = 100000000;
  var push = nano.socket('pub', {dontwait: true, sndtimeo: 200});
  push.tcpnodelay(false); 
  var addr = 'tcp://127.0.0.1:7899';
  push.connect(addr);

  while (true){
    var msg = 'hello from nanomsg stream api ' + i;
    push.send(msg);
    i-=1;
    push.flush();
  }
