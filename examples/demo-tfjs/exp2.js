const tf = require('@tensorflow/tfjs-node');
const shape = [2, 2];
// 初始化疑是
const t1 = tf.tensor([1, 2, 3, 4], shape, 'int32');

// 修改张量的形状
const t2 = t1.reshape([4, 1]);
t1.print();
t2.print();


// 释放t1\t2张量
t1.dispose()
t2.dispose();

