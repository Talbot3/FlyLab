const net = require('net');
const client = net.connect({
  port: 9090,
  host: 'localhost'
});

client.on('connect', (socket)=> {
 console.log('connected')
 setInterval(() => {
  client.write(Math.random() * 10000 + "hello", 'UTF-8', (err)=> {
    console.log(err);
  });
}, 200);
});

client.on('data', (buffer)=> {
  console.log(buffer);
})

