
// Prints: server listening 0.0.0.0:41234
const EventEmitter = require('events');
const dgram =require('dgram');
class MsStore extends EventEmitter {

  static instance(port) {
    if (!MsStore.Instance) {
      MsStore.Instance = new MsStore(port);
    } else if(port != MsStore.Instance.port) {
      console.error('error, unexcept port');
      return null;
    }
    return MsStore.Instance;
  }

  constructor(port) {
    super();
    this.port = port;
  }

  init() {
    console.log('=======================Connect Now 192.168.28.110 Init=============================');
    this.server = dgram.createSocket('udp4');
    this.server.bind(9724);
    // this.server.connect(this.port, '192.168.28.110', (err) => {
    //   console.log('=======================Connect Now 192.168.28.110 ',this.port,'Connect=============================');
    //   if(err) {
    //     console.log(err);
    //   }
    // });
    MsStore.bindHandler(this.server);
  }
  static bindHandler(server) {
    server.on('error', (err) => {
      console.log(`server error:\n${err.stack}`);
      server.close();
    });
    
    server.on('message', (msg, rinfo) => {
      console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });
    
    server.on('listening', () => {
      const address = server.address();
      console.log(`server listening ${address.address}:${address.port}`);
    });
  }

  static cleanHandler(server) {
    server.removeAllListeners();
  }
}

module.exports = MsStore;