
const child_process = require('child_process')
const EventEmitter = require('events')
const path = require('path');

class Mpeg1Muxer extends EventEmitter {

    constructor(options) {
        super(options)

        this.url = options.url
        this.stream = child_process.spawn(path.join(__dirname, "./rtsp.sh").toString(), [] , {
            detached: false,
            env: {
                TRANSPORT_IP: this.url,
            }
        })

        this.inputStreamStarted = true
        this.stream.stdout.on('data', (data) => {
            console.log('sending')
            return this.emit('mpeg1data', data) 
        })
        this.stream.stderr.on('data', (data) => { 
            console.log('erroring', data.toString());
            return this.emit('ffmpegError', data) 
        })
    }

    stop() {
        this.stream.stdout.removeAllListeners();
        this.stream.stderr.removeAllListeners();
        this.stream.kill();
        this.stream = undefined;
    }
}

module.exports = Mpeg1Muxer;