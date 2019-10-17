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
w.write(euro[1]);
w.cork();
console.log(w.data);

w.cork();
process.nextTick(() => w.uncork());
process.nextTick(() => w.uncork());

w.write('一些 ');
w.write('数据 ');
console.log(w.data);

w.cork();
w.write('一些 ');
console.log(w.data);

w.cork();
w.write('数据 ');
console.log(w.data);

process.nextTick(() => {
  w.uncork();
  console.log(w.data);

  // 数据不会被输出，直到第二次调用 uncork()。
  w.uncork();
  console.log(w.data);

});
console.log(w.data);