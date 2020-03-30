# HTTPS

 - 单向认证
 - 双向认证


## 生成 CA 证书

```
# 生成 CA 私钥
openssl genrsa -out ca.key 1024
# X.509 Certificate Signing Request (CSR) Management.
openssl req -new -key ca.key -out ca.csr
# X.509 Certificate Data Management.
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

# 生成证书 单域名生成

## 第一步，为服务器端和客户端准备公钥、私钥

```
# openssl genrsa -out server-key.pem 1024
# openssl genrsa -out client-key.pem 1024
# openssl req -new -key client-key.pem -out client-csr.pem
# openssl req -new -key server-key.pem -out server-csr.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:China
string is too long, it needs to be no more than 2 bytes long
Country Name (2 letter code) [AU]:CN
State or Province Name (full name) [Some-State]:localhost
Locality Name (eg, city) []:ShangHai
Organization Name (eg, company) [Internet Widgits Pty Ltd]:DeepblueAi
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:Test
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:9090
An optional company name []:
```

### 多DNS,多IP使用同一证书

```bash
openssl req -new -key server-key.pem -config openssl.cnf -out server-csr.pem

```

## 生成服务端证书及秘钥

```
openssl x509 -req -days 730 -CA ca.crt -CAkey ca.key -CAcreateserial -in server-csr.pem -out server-cert.pem -out server-cert.pem -extensions v3_req -extfile openssl.cnf

openssl x509 -req -days 365 -CA ca.crt -CAkey ca.key -CAcreateserial -in client-csr.pem -out client-cert.pem

```

## 打包和转换

openssl pkcs12 -export -in server-cert.pem -inkey server-key.pem -certfile ca.crt -out server.pfx 
openssl pkcs12 -export -in client-cert.pem -inkey client-key.pem -certfile ca.crt -out client.p12 

## 证书的转换，由10打包好的文件，可以经过转换变为其他格式以下提供常见的格式转换方法

```bash
openssl pkcs12 -export -inkey test.key -in test.cer -out test.pfx
openssl pkcs12 -in test.pfx -nodes -out test.pem 
openssl rsa -in test.pem -out test.key
openssl x509 -in test.pem -out test.crt
```

## 参考

- https://www.jianshu.com/p/cab185575b92