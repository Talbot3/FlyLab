#!/usr/bin/env node
const net = require('net');
let socket = new net.Socket({fd: 3});
const debug = require('util').debuglog('log');
socket.on('data', (buffer)=> {
  console.log('receive data ',buffer.toString());
  // socket.write(buffer);
});

process.stderr.write('here is error');
console.error('here is console\'s error');
process.stdout.write('here is stdout');
console.info('here is console\'s error');
debug('hello, my debug')