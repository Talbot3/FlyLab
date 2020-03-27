const tf = require('@tensorflow/tfjs-node');
const jimp = require('jimp');
/**
 * Read an image file as a TensorFlow.js tensor.
 *
 * Image resizing is performed with tf.image.resizeBilinear.
 *
 * @param {string} filePath Path to the input image file.
 * @param {number} height Desired height of the output image tensor, in pixels.
 * @param {number} width Desired width of the output image tensor, in pixels.
 * @return {tf.Tensor4D} The read float32-type tf.Tensor of shape
 *   `[1, height, width, 3]`
 */
async function readImageTensorFromFile(filePath, height, width) {
  return new Promise((resolve, reject) => {
    jimp.read(filePath, (err, image) => {
      if (err) {
        reject(err);
      } else {
        const h = image.bitmap.height;
        const w = image.bitmap.width;
        const buffer = tf.buffer([1, h, w, 3], 'float32');
        image.scan(0, 0, w, h, function(x, y, index) {
          buffer.set(image.bitmap.data[index], 0, y, x, 0);
          buffer.set(image.bitmap.data[index + 1], 0, y, x, 1);
          buffer.set(image.bitmap.data[index + 2], 0, y, x, 2);
        });
        resolve(tf.tidy(
            () => tf.image.resizeBilinear(buffer.toTensor(), [height, width])));
      }
    });
  });
}
(async ()=>{
  let tensor = await readImageTensorFromFile(`${__dirname}/test.jpg`,7.94, 12.81);
  tensor.print();
})()

