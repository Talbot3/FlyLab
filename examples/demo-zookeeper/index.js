const ZooKeeper = require('zookeeper').Promise;

const config = {
    connect: "0.0.0.0:2184",
    timeout: 5000,
    debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN,
    host_order_deterministic: false,
};
 
const client = new ZooKeeper(config);
client.on('connect', () => {
    // start using the client
    console.log('connect ');
});
 
client.init({});