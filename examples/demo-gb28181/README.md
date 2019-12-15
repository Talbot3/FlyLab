# GB28181信令网关

## [架构参考](https://blog.csdn.net/aflyeaglenku/article/details/78594118)

![GB28181信令网关](./20171121163658302.jpeg)

## [GB28181基础](https://blog.csdn.net/aflyeaglenku/article/details/78595070)

## 关于SIP协议的交互过程

> 本示例通过wireshark记录于Exaple-g28181文本中
对接GB28181中有几个点需要注意
INVITE 方法中Subject、sdp中y=1100000000这两个字段的结构需要详细查看

## SIP

> 协议的解析，已经超出了使用正则的范围，需要更宽泛的解析器实现，因此需要了解bison/pegjs相关的模块，从零开始实现一个协议栈

### SIP基础概念入门

- UserAgent: SIP `UAS/UAC`
- Proxy Server
- Location Server
- Register Server
- Redirect Server

## FAQ

- SIP是什么？
- SIP Header包括哪些字段？每个字段的涵意是什么、是如何构建的，从什么方法构建的？
- SIP UAS\UAC？
- SIP B2BUA的定义是什么？
- SIP 的方法的分类有几种？
- SIP 有几层模弄，最底层是什么？
- SIP 修改会话使用哪个方法？
- SIP传输层中，如何确定别一端的地址与端口？
- GB28181 RTP包结构是如何划分的？
- GB28181与SIP中的SDP有何区别，有哪些注意点？
- GB28181指定了SIP哪种逻辑体来作为中心式控制,比如UAS/UA Proxy/Register Server/Redirect Server/Redirect Server/B2BUA？
- GB28181查询设备xml结构？
- 如何设计SIP架构了，该如何划分，如何组织，如何调用为一边链？

## GB28181网关设计要点

- PS Stream

> 1. GB28181 附录F 规范性附录
> 2. 基于RTP的视音频数据PS封装

- [RTSP Server 设计要点](https://www.cnblogs.com/haibindev/p/7918733.html)

## `SIP Server`开源实现

- [opensips](https://opensips.org/)
- [routr](https://github.com/fonoster/routr)
- [kamailio](https://www.kamailio.org/w/features/)

___

- [pjlib](https://yq.aliyun.com/articles/243145)
- [exosip2 stack](http://www.antisip.com/download/exosip2/)
- [exosip2 开发手册](https://wenku.baidu.com/view/a94146a20029bd64783e2c96.html)

## 参考资料

- [基于GBT28181：SIP协议组件开发](https://my.oschina.net/qq1269122125)

- [nodejs sip server](https://github.com/fonoster/routr)

- [Osip2和eXosip协议栈的简析](https://blog.csdn.net/aflyeaglenku/article/details/51830775)

- [`RFC SIP Documents`](https://datatracker.ietf.org/wg/sip/documents/)

- [jssip](https://jssip.net/documentation/3.3.x/getting_started/)
- [node.js实现国标GB28181设备接入的sip服务器解决方案](https://blog.csdn.net/xiejiashu/article/details/80559878)

- [GB28181 example](https://github.com/10961020/GB28181/blob/master/UDP_sip_copy.py)

- [ip (gb28181)信令交互-视频点播与回播](https://www.cnblogs.com/dpf-10/p/8915723.html)

- [智能安防 gat1400 协议](https://wenku.baidu.com/view/f29620b24bfe04a1b0717fd5360cba1aa9118c68.html?from=search)

- [grammar入门](https://zhuanlan.zhihu.com/p/20178871)