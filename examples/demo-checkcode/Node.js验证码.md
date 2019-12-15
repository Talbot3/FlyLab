## Node.js登录之验证码

> Node.js本身并没有图片方面的API,要实现该功能，有两个方式.

> * 调用存在Canvas的语言(php/java)，编写验证码功能提供给Node.js调用(RPC)

> * 为Node.js编写插件(Linux平台下，安装该插件相对方便，但是windows一般不建议安装与使用)，调用C++库,实现图片API,然后生成验证码图。（Node-Canvas\Node-ccap）

> * 使用Node.js原生编写PNG图片库，生成，现成的一个极简单的参考库pnglib
