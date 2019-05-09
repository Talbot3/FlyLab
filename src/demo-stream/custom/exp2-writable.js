const {Writable} = require('stream');
const {StringDecoder} = require('string_decoder');
const myWritable = new Writable({
  write(chunk, encoding, callback) {
    if (chunk.toString().indexOf('a') >= 0) {
      callback(new Error('无效的数据块'));
    } else {
      callback();
    }
  }
});

myWritable.write('hello');


class StringWritable extends Writable {
  constructor(options) {
    super(options);
    this._decoder = new StringDecoder(options && options.defaultEncoding);
    this.data = '';
  }

  _write(chunk, encoding, callback) {
      if (encoding === 'buffer') {
        chunk = this._decoder.write(chunk);
      }
      this.data += chunk;
      callback();
  }

  _final(callback) {
    this.data += this._decoder.end();
    callback();
  }
}

const euro = [[0xE2, 0x82], [0xAC]].map(Buffer.from);
const w = new StringWritable();

w.write('货币: ');
w.write(euro[0]);
w.end(euro[1]);

console.log(w.data);

