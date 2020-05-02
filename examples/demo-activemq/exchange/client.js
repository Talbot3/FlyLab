const amqp = require('amqplib/callback_api');
const {url} = require('../config.json');
amqp.connect(url, (error, connection)=> {
    if (error) throw error;
    connection.createChannel((error, channel)=> {
        if (error) throw error;
        let exchange ='logs';

        channel.assertExchange(exchange, 'direct', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, (error, q)=> {
            if (error) throw error;
            // info => rounting
            channel.bindQueue(q.queue, exchange, '#');
            // channel.bindQueue(q.queue, exchange, 'warn');
            // channel.bindQueue(q.queue, exchange, 'error');

            channel.consume(q.queue, (msg)=> {
                if (msg.content) {
                    console.log('[x] %s', msg.content.toString());
                }
            }, {
                noAck: true
            })
        })
    })
})