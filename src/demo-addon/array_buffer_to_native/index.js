const binding = require('bindings')('array_buffer_to_native');
const array = new Int32Array(10);

array[0] = 49;
array[1] = 49;
array[2] = 49;
array[3] = 49;
array[4] = 49;
array[5] = 49;
array[6] = 49;
array[6] = 49;
array[7] = 49;
array[8] = 49;
array[9] = 49;
binding.AcceptArrayBuffer(array.buffer)