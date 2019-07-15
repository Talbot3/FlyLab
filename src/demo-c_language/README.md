# C17 知识点摘要

## 编译、链接、装载

>C语言要点摘要，编译标准为c17

```bash
clang -std=c17 -o targetName sourceFile.c
```

- `stdio.h not found`
clang的编译配置头文件地址，参照 `gcc -v`文件地址，默认是配置好了的。例如本机地址为：
`/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.14.sdk/usr/include`

- https://tech.meituan.com/2015/01/22/linker.html

## 工具

- [ldd/otool](https://blog.csdn.net/delphiwcdj/article/details/25541397) 用来分析程序运行时需要依赖的动态库的工具
- ar 打包为`.a`的静态库工具
- nm是用来查看指定程序中的`符号表相关内容的工具`
- [lldb](https://southpeak.github.io/2015/01/25/tool-lldb/)/gdb 调试工具

## 其他话题

- 内存池
- 线程池
- 网络
- 异步IO
- 协程
- ffmpeg
- 单元测试
- 模糊测试
- [Pthread多线程编程](https://imzlp.me/posts/58408/)
- [C语言的异常处理\堆栈捕获](http://www.cnblogs.com/hazir/p/c_setjmp_longjmp.html)
- [异常日志格式](http://dwarfstd.org/)

## C语言相关资料

- [tboox](https://tboox.org/cn/)
- glib
- xmake
- [libav](https://github.com/leandromoreira/ffmpeg-libav-tutorial)
- [object-files-and-symbols](http://nickdesaulniers.github.io/blog/2016/08/13/object-files-and-symbols/)

## 工程实践

- clang-format 代码风格工具
- clang-tidy 静态检测工具
- 标记过期函数 `__attribute__((deprecated)) void attribute();`
- [捕获异常信号-保存堆栈](https://gist.github.com/jvranish/4441299)
- [Crash日志-add2line](http://wiki.dreamrunner.org/public_html/Linux/addr2line-usage.html)
- [常用日志库推荐] zlog
- [构建工具 cmake、gn/ninja]

## 关于底层的思考

- [虎书推荐的 `GNU Bison`]()
- [IP组播](http://www.tldp.org/HOWTO/Multicast-HOWTO-2.html)
- [c pthread](http://www.csc.villanova.edu/~mdamian/threads/posixthreads.html)

## 参考

- 《C语言接口与实现——创建可重用软件的技术》
- [man page](https://www.unix.com/man-page-repository.php)
- [cmake totorial](https://github.com/Campanula/CMake-tutorial)
- [Pthread多线程编程](https://randu.org/tutorials/threads/#resources)
- [libuv基础教程](https://luohaha.github.io/Chinese-uvbook/source/introduction.html)
- [程序员的自我修养](https://book.douban.com/subject/3652388/)
- [Linux RCU](http://chengqian90.com/Linux%E5%86%85%E6%A0%B8/Linux-RCU%E9%94%81%E6%9C%BA%E5%88%B6.html)
- [RCU 演变](https://blog.csdn.net/dog250/article/details/5303424)
- [Linux BPF](https://zh.wikipedia.org/wiki/BPF)
- [Linux EBPF](https://blog.csdn.net/ljy1988123/article/details/50444693)
- [深入理解并行编程](https://book.douban.com/subject/27078711/)
- [Awesome-C](https://notabug.org/koz.ross/awesome-c#frameworks)

## QA

- `__VA_ARGS__` 作用是什么?
- 获取环境变量的函数名称及返回值类型是什么?
- libuv fd=3是什么意思,常用的场景有哪些？
- zero copy ?
