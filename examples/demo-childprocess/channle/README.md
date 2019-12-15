# 多进程框架开发注意事项

- [x]UnixDomainSocket
- [x]Nodejs default Channel

## 父子进程调试

- 子进程的输出输入信息需要需要打印至主进程
通过监捉childe_process.stdio[0]\childe_process.stdio[1]\childe_process.stdio[2].on('data', callback)
即可获取子进程的打印信息，而子进程调试信息的输出正常调用console即可