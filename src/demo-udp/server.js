// Server

const PORT = 33333;
const HOST = '127.0.0.1';

let dgram = require('dgram');
let server = dgram.createSocket('udp4');

server.on('listening', ()=>{
  let address = server.address();
  console.log('UDP Server listening on ', address.address, ':', address.port);
});

server.on('message', (message, remote) => {
  console.log(remote.address, ":", remote.port, '-', message, '-', message.toLocaleString());

  server.send('received msg fine!', remote.port, remote.address);
  server.send('received', 33333, '255.255.255.255');
})

server.bind(PORT, HOST);