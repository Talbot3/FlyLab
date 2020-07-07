var kafka = require('kafka-node');
const client = new kafka.KafkaClient({
  kafkaHost: '127.0.0.1:9092'
});

producer = new kafka.HighLevelProducer(client),
payloads = [
    { topic: 'test', messages: 'hi' },
];
producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
      console.log(err, data);
  });
});