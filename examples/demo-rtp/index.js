const Session = require('krtp').Session
 
const s = new Session(1373)
 
s.on('message', (msg) => {
  console.log('where are you', msg)
  s.close()
})
 
s.sendSR('192.168.73.4').catch(err => {
  console.log(err)
})
s.send(Buffer.from('Hello world'))