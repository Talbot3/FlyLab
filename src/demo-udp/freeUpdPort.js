const dgram = require('dgram');

function freeUdpPort(cb) {
  const socket = dgram.createSocket('udp4');
  socket.bind((err)=> {
    if (err) {
      return cb(err);
    }

    let address = socket.address();
    socket.close();
    setImmediate(cb, null, address.port);
  })
}

freeUdpPort((err, port) => {
  console.log(err, port);
});