# 原生高并发网络原理

常见的几种形式有

- 多线程方案（将阻塞式接口转换为非阻塞形式）
- 基于epoll、kqueuq、iocp接口实现的事件流的网络模型，比如libuv

## [IO多路复用](https://www.zybuluo.com/phper/note/595507)

pool\select\epoll\kqueue\iocp

## [Actor编程模型](http://jiangew.me/actor-model/#actor-%E6%A8%A1%E5%9E%8B%E8%83%8C%E6%99%AF)

起源于Erlang,巧妙的避开了锁、多线程、多进程的高并发高阶 `并发编程范式`;

## 高精度时钟

## 参考

- [并发服务](https://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/)
