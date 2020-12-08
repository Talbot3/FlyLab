const tf = require('@tensorflow/tfjs-node');
const a = tf.tensor1d([1, 2]);
const b = tf.tensor1d([3, 4]);
const c = tf.tensor1d([5, 6]);

tf.addN([a, b, c]).print();