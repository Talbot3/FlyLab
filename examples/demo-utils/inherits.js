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
    // {...{i}, i:33,} 与 {i:33, ...{i}} 前者被后者覆盖
    b.emit('data', {...{i}, i:33,});
}, 1000);