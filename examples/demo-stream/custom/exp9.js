const {Readable} = require('stream');
async function * generate() {
  yield await Promise.resolve('wahaha');
  yield 'hello';
  yield 'streams';
};

const {StringDecoder} = require('string_decoder');
// 异步迭代器
const readable =Readable.from(generate());

// readable.on('data', (chunk)=>console.log(chunk));

const {Writable} = require('stream');

// 可写流 解码buffer
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
    console.log(this.data);
    callback();
  }
}

readable.pipe(new StringWritable('utf-8'));