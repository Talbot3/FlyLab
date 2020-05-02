const amqp = require('amqplib/callback_api');
const {url} = require('../config.json');
amqp.connect(url, (error, connection)=> {
    if (error) throw error;
    connection.createChannel((error, channel)=> {
        if (error) throw error;
        let exchange ='logs_topic';

        channel.assertExchange(exchange, 'topic', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, (error, q)=> {
            if (error) throw error;
            // info => rounting
            // 接受所有消息
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