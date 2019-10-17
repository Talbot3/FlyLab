# Stream

- Writable
- Readable
- Duplex 可读写流
- Transform 可读写流

```javascript
//已经实现了的
{Passthough、pipeline、finished} = require('stream')
```

## 重要概念

- 缓冲
  - highWaterMark 字节总数， stream.push(chunk)
  - stream.pipe 限制数据的缓冲到可接受的程度，发读写不一致的源头与目的地不会压垮内存

- 流动模式
- 暂停模块
- 强制刷入数据

## Transfrom

- _transform(chunk, enc, cb) - 阅读块并推送转换后的数据
- _flush(cb) - 如果在输入完成后需要在结尾处写入附加数据

> This will be called when there is no more written data to be consumed, but before the 'end' event is emitted signaling the end of the Readable stream.

## 参考

- [i5ting nodejs stream](https://cnodejs.org/topic/570b1fa494b38dcb3c09a7f8)
- [nodejs-duplex-streams](http://codewinds.com/blog/2013-08-31-nodejs-duplex-streams.html)