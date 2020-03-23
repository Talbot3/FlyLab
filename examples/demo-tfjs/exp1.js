const tf = require('@tensorflow/tfjs-node');

const shape = [2,3];
const a = tf.tensor([1,2,3,10,20,30], shape);

a.print();