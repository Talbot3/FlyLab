const Stream = require('./stream')

const options = {
    name: 'streamName',
    url: 'rtsp://10.16.33.220:9090/dss/monitor/param?cameraid=1000122%240&substream=1',
    port: 5000
}

stream = new Stream(options)

stream.start()