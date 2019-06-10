# GB28181

## 关于SIP协议的交互过程

> 本示例通过wireshark记录于Exaple-g28181文本中
对接GB28181中有几个点需要注意
INVITE 方法中Subject、sdp中y=1100000000这两个字段的结构需要详细查看

## SIP

### SIP基础概念入门

- UserAgent: SIP `UAS/UAC`
- Proxy Server
- Location Server
- Register Server
- Redirect Server

## `SIP Server`开源实现

- [opensips](https://opensips.org/)
- [routr](https://github.com/fonoster/routr)
- [kamailio](https://www.kamailio.org/w/features/)

## 参考资料

- [nodejs sip server](https://github.com/fonoster/routr)

- [Osip2和eXosip协议栈的简析](https://blog.csdn.net/aflyeaglenku/article/details/51830775)

- [`RFC SIP Documents`](https://datatracker.ietf.org/wg/sip/documents/)

- [jssip](https://jssip.net/documentation/3.3.x/getting_started/)
- [node.js实现国标GB28181设备接入的sip服务器解决方案](https://blog.csdn.net/xiejiashu/article/details/80559878)

- [GB28181 example](https://github.com/10961020/GB28181/blob/master/UDP_sip_copy.py)

- [ip (gb28181)信令交互-视频点播与回播](https://www.cnblogs.com/dpf-10/p/8915723.html)