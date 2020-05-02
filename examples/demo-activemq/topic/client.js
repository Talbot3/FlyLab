var amqp = require('amqplib/callback_api');
const {url} = require('../config.json');
amqp.connect(url, (error, connection)=> {{
    if (error) {
        throw error;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'queue_side_rubbish_event';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});