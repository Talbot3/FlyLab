const PORT = 33333;
const HOST = '127.0.0.1';

const dgram = require('dgram');
const message = Buffer.from('My KungFu is Good');

let client = dgram.createSocket('udp4');
client.on('message', (msg, rinfo)=> {
  console.log('recv %s(%d) from server\n', msg, msg.length);
});

client.bind(5060, '127.0.0.1')

setInterval(() => {
  client.send(message, PORT, HOST, (err, bytes)=> {
    if (err)  throw err;
    console.log('UDP message sent to ', HOST, ':', PORT);
    // client.close();
  })
}, 3000);
