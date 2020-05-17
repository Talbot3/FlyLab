const Emitter = require('events').EventEmitter;

module.exports = class DelayQueue extends Emitter {
    delay;
    batch;
    timer;
    Queue = [];
    constructor({delay=1000, batch= 300}) {
        this.delay = delay;
        this.batch = batch;
    }

    push(msg) {

    }

    checkQueue() {

    }

}