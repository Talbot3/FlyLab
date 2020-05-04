const {inherits} = require('util');

const EventEmitter = require('events');

class Base {

}

inherits(Base, EventEmitter);

let b = new Base();

b.on('data', (data)=> {
    console.log(data)
});

let i = 0;
setInterval(()=> {
    b.emit('data', i);
}, 1000);