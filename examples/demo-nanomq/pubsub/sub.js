
var nano = require('nanomsg');
var pull = nano.socket('sub', {encoding:'utf8', dontwait: true, rcvtimeo: 200} );
var addr = 'tcp://127.0.0.1:63979';
pull.rcvbuf(80480);

pull.bind(addr);
pull.on('data', function(data) {
    console.log(data);
});
