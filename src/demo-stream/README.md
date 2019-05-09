# Stream

- Writable
- Readable
- Duplex 可读写流
- Transform 可读写流

### 重要概念

- 缓冲
  - highWaterMark 字节总数， stream.push(chunk)
  - stream.pipe 限制数据的缓冲到可接受的程度，发读写不一致的源头与目的地不会压垮内存

- 流动模式
- 暂停模块