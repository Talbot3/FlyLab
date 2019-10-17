# QUIC

> a new kind of tcp, but not tcp; base on udp

## 观察QUIC C/S 交互过程

```bash
cd quic && npm i && NODE_DEBUG=quic,quic:session,quic:stream node example/echo.js
```

## 关于QUIC的几个主题

- [Implementations](https://github.com/quicwg/base-drafts/wiki/Implementations)

### MediaStream on quic

### HTTP3 on quic

- [http3](https://kinsta.com/blog/http3/)

## IETF RFC QUIC

...
- https://tools.ietf.org/html/draft-ietf-quic-transport-16
- https://tools.ietf.org/html/draft-ietf-quic-transport-20
- https://tools.ietf.org/html/draft-ietf-quic-transport-22

## 参考

- [为什么我们使用Linux内核的TCP堆栈？](https://news.ycombinator.com/item?id=12021195)
- [tcp三次握手](https://www.youtube.com/watch?v=LyDqA-dAPW4&feature=youtu.be)
- [QUIC - Quick UDP Internet Connections](https://www.net.in.tum.de/fileadmin/TUM/NET/NET-2016-09-1/NET-2016-09-1_06.pdf)
- [whats-happening-quic](https://www.ietf.org/blog/whats-happening-quic/)
- [QUIC Implementations](https://github.com/quicwg/base-drafts/wiki/Implementations)
- [lock-free-multithreading-atomic-operations](https://www.internalpointers.com/post/lock-free-multithreading-atomic-operations)