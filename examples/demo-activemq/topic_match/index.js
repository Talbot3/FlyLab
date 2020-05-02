let amqp = require('amqplib/callback_api');
const {url} = require('../config.json');
amqp.connect(url, (error, connection)=> {
    if (error) {
        throw error;
    }
    let exchange = 'logs_topic';
    let queue_name = 'queue_rubbish_system_event_topic';
    connection.createChannel((error, channel) => {
        if (error)
          throw error;
        // topic\direct\fansout
        channel.assertExchange(exchange, 'topic', {
            durable: false
        })
        msg = 0;
        function sendQueue(channel, exchange, msg) {
            let subObject = ['info', 'warn', 'error'];
            let sub = subObject[Math.floor(Math.random()*10)%2];
            channel.publish(exchange, sub, Buffer.from(msg.toString()));

            console.log(" [x] Sent %s", msg, sub);
            msg = Number(msg) + 1;
            // setTimeout(sendQueue(channel, queue, msg), 9000);
            setTimeout(()=>sendQueue(channel, exchange, msg.toString()), 1000);
    
    
        }
        setTimeout(()=>sendQueue(channel, exchange, 0), 1000);
    
        // channel.bindQueue(queue_name, exchange, '');
    })
})