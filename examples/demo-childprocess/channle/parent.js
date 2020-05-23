var child_process = require('child_process')
const fs = require('fs');

var child = child_process.spawn("/usr/local/bin/node", ['./child.js'], {
  stdio: ['ignore', 'pipe', 'pipe', 'pipe'],
  detached: true
})
child.stdio[3].write('hello, 哟hohohohoho');
child.stdio[3].on('data', m => {
  console.log('KID SAY (fd: 3):', m.toString());
  // child.stdio[3].write('hoho');
})

child.stdio[1].on('data', (buffer)=> {
  console.log(buffer.toString())
})

child.stdio[2].on('data', (buffer)=> {
  console.log(buffer.toString())
})

process.on('beforeExit', ()=> {
   console.log('bybye')
})

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
  process.exit(process.exitCode);
});

process.on('multipleResolves', (type, promise, reason) => {
  console.error(type, promise, reason);
  setImmediate(() => process.exit(1));
});

process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});
