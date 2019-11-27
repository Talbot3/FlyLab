[Node.JS用RSA签名算法公钥加密私钥解密，实现License软件授权验证
](http://ourjs.com/detail/5cebeeb5ebcbdd04c17a3865)
___

> just copy from [ourjs](http://ourjs.com/)

在Node.JS经常用加密算法对一些敏感用户数据进行加密，比如说用户密码。而且用户密码不需要考虑解密，如果用户遗失密度，重置成新的已经新密码即可。此时用不可逆加密算法即可，登录时对比加密后的字符串即可。

还有一些应用需要解密出原内容的，比如说HTTPS的传输。使用公钥对HTTP请求进行加密，在服务器用私钥解密。此时需要用到不对称加密算法，在Node.JS中这种机制很容易实现。

生成公钥和私钥

Node.JS中v10.12.0以上的版本，新添加 了 generateKeyPair方法可以用来创建公钥私钥：
crypto.generateKeyPair(type, options, callback)#
Added in: v10.12.0

因为我们要更改私钥，加入我们的版本信息，所以我们使用openssl生成私钥，命令行输入：

```bash
openssl genrsa -out private.pem 1024
```

输出如下：
Generating RSA private key, 1024 bit long modulus
........................++++++
................++++++
e is 65537 (0x10001)

私钥生成之后，您可以修改这个文件将部分内容换成您的版权声明，以备长期使用。私钥只在软件授权服务器上使用，普通用户无法获得。

用来加密LICENSE信息，如软件的购买方名称，版本，购买日期，用户数等信息，然后用这个修改后的私钥，生成公钥，分发给应用程序解密使用。

```bash
openssl rsa -in private.pem -pubout -out public.pem
```

输出：
writing RSA key

由此可见，公钥是可以根据私钥推导生成出来的。因此要保证私租的安全。


## 私钥加密公钥解密

在客户端，如果仅需要私钥加密，公钥解密。比如软件授权方用公钥解密出软件授权信息，购买方名称，购买时间等。
这种情况Node.JS做了很好的封装，调用两个函数即可：

```
var signature = crypto.privateEncrypt(privateKey, Buffer.from('OurJS.com私钥加密公钥解密测试'))
var decrypted = crypto.publicDecrypt(publicKey, signature);
console.log(decrypted.toString())
```


## 公钥加密私钥解密

传统的RSA用公钥加密，私钥解密过程，使用publicEncrypt/ privateDecrypt 方法：

var encrypted = crypto.publicEncrypt(publicKey, Buffer.from('OurJS.com公钥加密私钥解密测试'))
var decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log(decrypted.toString())
OurJS.com私钥加密公钥解密测试
