const buf = Buffer.from([0x00, 0x50, 0x00, 0x50]);
console.log(buf.length);
console.log(buf.readInt16BE(0));
console.log(buf.readInt16BE(1));

// Int16Array -> Uint8Array
let data_16 = new Int16Array([2313132,313143214]);
console.log(data_16);
let data_8 = new Uint8Array(data_16.buffer, data_16.byteOffset, data_16.byteLength)
console.log(data_8);