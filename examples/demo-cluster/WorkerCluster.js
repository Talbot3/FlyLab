const cluster = require('cluster');
const Emitter = require('events').EventEmitter;
const os = require('os');
class WorkerCluster extends Emitter {
    params;
    runner;
    constructor(...params) {
        super();
        this.params = params;
    }

    init(runner) {
        this.runner = runner;
    }

    start() {
        if (cluster.isMaster) {
            for (let i=1; i< os.cpus().length;++i) {
                cluster.fork();
            }
        } else {
            let result = this.runner(...this.params);
            this.emit('data', result);
        }
    }
}

module.exports = WorkerCluster;