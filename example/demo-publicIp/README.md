# 获取公网IP的方式

> 一般检测外网IP存在两种方式

- stun
- [http请求](ipinfo.io) 如 [`public-ip`](https://github.com/sindresorhus/public-ip)
  - ip.sb
  - ifconfig.io

# 获取内网IP

```javascript
// gets all network interfaces that have been assigned network addresses
let networkInterfaces = os.networkInterfaces();
// gets the external IPv4 address
let addresses = [];
Object.keys(networkInterfaces).forEach(interfaceName => {
  let networkInterfaceAddresses = networkInterfaces[interfaceName];
  networkInterfaceAddresses
    .filter(address => address.family === 'IPv4' && !address.internal)
    .map(address => address.address)
    .forEach(address => {
      addresses.push(address);
    });
});
```
