# 多进程架构

- https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a
- https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
- https://eggjs.org/zh-cn/core/cluster-and-ipc.html
- https://www.w3cschool.cn/nodejs/d7c21itn.html

## 关键概念 options.stdio


// 摘要
通过修改options.stdio，可以将子进程的stdio可以绑定到不同的地方。options.stdio可以接受两种类型的值：字符串或者数组

当options.stdio的值是字符串时，它有以下几种取值
pipe ： 相当于[“pipe”,“pipe”,“pipe”]，子进程的stdio与父进程的stdio通过管道连接起来，
ignore ： 相当于[“ignore”,“ignore”,“ignore”]，子进程的stdio绑定到/dev/null，丢弃数据的输入输出
inherit ： 继承于父进程的相关stdio、即等同于[process.stdin, process.stdout, process.stderr]或者[0,1,2]，此时父子进程的stdio都是绑定到同一个地方。
当options.stdio的值是数组的时候，前三个元素分别代表stdin stdout stderr。`如果数组的元素大于3，则会在父子进程之间建立 额外的通讯通道`，它们的值可以是下面的其中之一

- pipe：额外的通讯通道 通过管道通讯。管道的两端分别连接着父子进程，在父进程这边可以通过subprocess.stdio[n]（n=0、1、2）或者subprocess.stdin, subprocess.stdout, subprocess.stderr来引用管道的一端，而子进程则可以通过process.stdin, process.stdout, process.stderr来引用另外一端，详情可以见面的例子。
- ipc：额外的通讯通道 通过ipc channel通讯
- ignore：绑定到/dev/null，即丢弃数据的输入输出
Stream对象：额外的通讯通道 通过nodejs中Stream 对象通讯，对象底层的文件描述符代表一个文件例如socket，tty、本地文件等。
正整数：和Stream相似。
null和undefined：对于前3个元素，它们会被设为pipe，对于剩下的元素会被设置ignore
