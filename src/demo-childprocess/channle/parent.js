var child_process = require('child_process')

var child = child_process.spawn("/usr/local/bin/node", ['./child.js'], {
  stdio: ['ignore', 'pipe', 'pipe', 'pipe'],
  detached: true
})
child.stdio[3].write('hello, 哟hohohohoho');
child.stdio[3].on('data', m => {
  console.log('KID SAY (fd: 3):', m.toString());
  child.stdio[3].write('hoho');
})

