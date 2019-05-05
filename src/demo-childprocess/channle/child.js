const net = require('net');

let socket = new net.Socket({fd: 3});
socket.on('data', (buffer)=> {
  socket.write(buffer)
})