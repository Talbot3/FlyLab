const buf = Buffer.from([0x00, 0x50, 0x00, 0x50]);
console.log(buf.length);
console.log(buf.readInt16BE(0));
console.log(buf.readInt16BE(1));
