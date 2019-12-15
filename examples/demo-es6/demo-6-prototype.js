/**
 * Created by crazy on 17-3-19.
 */
let  util = require('util');
let event = require('events');

function HiBaby() {
}

util.inherits(HiBaby,event.EventEmitter);


var hiBaby = new HiBaby();

hiBaby.on('some_event',function () {
    console.log('test')
});


hiBaby.emit('some_event')