let amqp = require('amqplib/callback_api');
const {url} = require('../config.json');
amqp.connect(url, (error, connection)=> {
  if (error) {
    throw error;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    let queue = 'queue_side_rubbish_event';
    let msg = 0;

    channel.assertQueue(queue, {
      durable: true
    });
    function sendQueue(channel, queue, msg) {
        channel.sendToQueue(queue, Buffer.from(msg), {
          persistent: true
        });
        console.log(" [x] Sent %s", msg);
        msg = Number(msg) + 1;
        // setTimeout(sendQueue(channel, queue, msg), 9000);
        setTimeout(()=>sendQueue(channel, queue, msg.toString()), 1000);


    }
    setTimeout(()=>sendQueue(channel, queue, msg.toString()), 1000);

  });
});